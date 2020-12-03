import React, { Component } from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import TutorialDataService from "../services/tutorial.service";
import Tutorial from "./tutorial.component";
import {Image,Row,Col,Container,Badge,Button} from 'react-bootstrap';
import passport from '../images/passport.jpg';
import ReactShadowScroll from 'react-shadow-scroll';
import add from '../images/add.svg';
import notification from '../images/notification.svg';
import people from '../images/people.svg';
import settings from '../images/settings.svg';
import sms from '../images/sms.svg';
import logout from '../images/logout.svg';
import moment from 'moment'
import Header from '../header';
import {auth,storage,fire} from '../firebase';
 // import "./App.css";

// import AddTutorial from "./components/add-tutorial.component";
// import Home from "./components/Home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);
    this.check=this.check.bind(this);
    this.logout=this.logout.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      lithuania: '',
      uk: '',
      photo: null,
      userimage:null,
      currentUser:null,
      username:'',
      userdata:[],
      postdata:[]

    };
    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = TutorialDataService.getAll().orderBy("timestamp", "asc").onSnapshot(this.onDataChange);
    

   this.check();
    
  }
  check(){
    auth.onAuthStateChanged(function(user) {
      if (user) {
        
        // console.log(user.uid);
        
      } 
    });
  }

  componentWillUnmount() {
    // this.unsubscribe();
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      tutorials.push({
        id: id,
        userId:data.userId,
        username: data.username,
        description: data.description,
        timestamp:  data.timestamp,
        userimage:data.userimage,
        image_url_0:data.image_url_0,
        image_url_1:data.image_url_1,
        image_url_2:data.image_url_2,
        image_url_3:data.image_url_3,
        image_url_4:data.image_url_4,
        image_url_5:data.image_url_5,
        image_url_6:data.image_url_6,
        // like:fire.collection("Posts").doc(id).collection("Liked_Users").get()
        // .then(querySnapshot => {
        //     querySnapshot.forEach(doc => {
        //         // console.log(doc.data().liked);
        //          return doc.data().liked;
        //     });
        // })
      });
      
    });
const user = auth.currentUser;
// console.log(user.uid);
storage
    .ref("images")
    .child(user.uid+'.png')
    .getDownloadURL()
    .then(url => {
      var image = fire.collection("/Users").doc(user.uid);
      
 image.update({
    image: url
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
      this.setState({ photo:url });
      // console.log(this.state.photo)


      image.get().then((doc)=> {
        if (doc.exists) {
          const result = doc.data().username;
          this.setState({username:result})
            console.log(`Document data: ${this.state.username}`);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
      

    }).catch((error)=>{console.log(error.code)});

  


    this.setState({
      tutorials: tutorials,
      
    });
   const data = this.state.tutorials.map(data=>{return data.userId});
   this.setState({postdata:data})

   fire.collection('Users').onSnapshot(
    (snapshot) => {
      // Loop through the snapshot and collect
      // the necessary info we need. Then push
      // it into our array
      const allMessages = [];
      snapshot.forEach((doc) => allMessages.push(doc.data()));

      // Set the collected array as our state
      this.setState({userdata:allMessages});
     
    },
    (error) => console.error(error)
  );


    

  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }
  logout() {
    auth.signOut();
    
    this.props.history.push("/login");
    
  }
  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;
    // var user = auth.currentUser;
    return (
      <div   style={{backgroundColor:'linen',marginTop:90}}>
      <Header/>
       {/* photo: {this.state.photo} */}
      <div  style={{overflowX:'hidden'}}>
      {/* <ReactShadowScroll> */}
       <div className="row" style={{marginBottom:10}}>

           <div className="col-sm-4 ">
           <div className=" position-fixed">
               <Container>
               <Row style={{marginBottom:30}}>
    <Col xs={6} md={4} style={{paddingTop:5}}>
    <Image src={this.state.photo} width='80' height="80" roundedCircle />

 {/* <Badge variant="light">9</Badge> */}

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
   <strong>{this.state.username}</strong>
    
 {/* <Badge variant="light">9</Badge> */}

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    
   <strong> View profile</strong>
 {/* <Badge variant="light">9</Badge> */}

    </Col>
   
  </Row>

  <Row style={{marginBottom:15, paddingLeft:20}} >
    <Col xs={6} md={4} style={{paddingTop:5}}>
    <Image src={require('../images/home.png')} width="40" height="40"  />



    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    Dashboard
    

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
   

    </Col>
   
  </Row>
  
  <Row style={{marginBottom:15, paddingLeft:20}} >

    <Col xs={6} md={4} style={{paddingTop:5}}>
    <Image src={sms} width="40" height="40"  rounded/>



    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    Forum{'\n'}
    
 {/* <Badge variant="light">9</Badge> */}

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    
    {/* View profile */}
 {/* <Badge variant="light">9</Badge> */}

    </Col>
   
  </Row>
  <Row style={{marginBottom:15, paddingLeft:20}} >

    <Col xs={6} md={4} style={{paddingTop:5}}>
    <Image src={logout} width='40' height="40" rounded />

 {/* <Badge variant="light">9</Badge> */}

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    <Button variant="link"
     onClick={this.logout.bind(this)}
    >
       <strong style={{color:'black'}}> Logout</strong></Button>
  
 {/* <Badge variant="light">9</Badge> */}

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    
    {/* View profile */}
 {/* <Badge variant="light">9</Badge> */}

    </Col>
   
  </Row>
  <div>
                 
               
               </div>
</Container>
               </div>
             
           
           </div>
          {/* {tutorials.map((post,index)=>( */}

                <div className="col-sm-6" 
           style={{
            backgroundColor:'linen',
           
          }}
// key={index}
           >
{tutorials.map((post,index)=>(
                
               <div 
               style={{
                   borderRadius:20,
                   backgroundColor:'white',
                   paddingLeft:20,
                   paddingRight:20,
                   alignItems:'center',
                   
    marginBottom:15,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
               }}
               key={index}
               >
               <div>
               <Container style={{marginBottom:10}}>
  <Row>
    <Col xs={6} md={8}>
      <Image src={post.userimage} width='60' height="60" roundedCircle />
    <strong> {post.username}</strong> 

    </Col>
    {/* <Col xs={6} md={4} style={{paddingTop:20}}>
    {post.name}
    </Col> */}
    <Col xs={6} md={4}  style={{paddingTop:20}}>
    {/* {moment(post.timestamp).startOf('hour').fromNow()}  */}

      {post.timestamp} 
    </Col>
  </Row>
</Container>

               </div>
               <div>
                 
                 <Container style={{marginBottom:10,maxHeight:'70%'}}>
                 {/* <Image src={post.image_url_0} width="100%" height="10%" /> */}
                   {post.image_url_0?( <Image src={post.image_url_0} width="100%" height="10%" />):
                   (<div style={{maxHeight:'100',textAlign:'center', backgroundColor:'lightblue'}}>
                     <div style={{padding:50}}>   {post.description}</div>
                  
                     </div>)}
     

                 </Container>
                
               </div>
               <div>
                 <Container>
               <Row>
                 <Col xs={6} md={12} style={{paddingTop:10}}>
    
              <strong>  {post.username} : {post.description}</strong>
 

    </Col>
     </Row>
     </Container>
               </div>
               <div>
               <Container>
  <Row>
    <Col xs={6} md={4} style={{paddingTop:20}}>
      like
 <Badge variant="light">Like</Badge>

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    comments
 <Badge variant="light">9</Badge>

    </Col>
    <Col xs={6} md={4}  style={{paddingTop:20}}>
      share
    </Col>
  </Row>
  <div>
                 
               
               </div>
</Container>
               </div>
               </div>
           ))}
              
           </div>
             
          
           <div className="col-sm-2"></div>

       </div>
      </div>
      </div>
    );
  }
}

export default Home;
