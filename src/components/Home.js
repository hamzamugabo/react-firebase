import React, { Component } from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import TutorialDataService from "../services/tutorial.service";
import Tutorial from "./tutorial.component";
import {Image,Row,Col,Container,Badge} from 'react-bootstrap';
import passport from '../images/passport.jpg';
import ReactShadowScroll from 'react-shadow-scroll';
import add from '../images/add.svg';
import notification from '../images/notification.svg';
import people from '../images/people.svg';
import settings from '../images/settings.svg';
import sms from '../images/sms.svg';
import moment from 'moment'
import {auth} from '../firebase';
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

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      lithuania: '',
      uk: '',
      currentUser:null

    };
    // this.getImage('lithuania')
    // this.getImage('uk')
    this.unsubscribe = undefined;
  }

  // getImage (image) {
  //   let { state } = this
  //   storage.child(`${image}.png`).getDownloadURL().then((url) => {
  //     state[image] = url
  //     this.setState(state)
  //   }).catch((error) => {
  //     // Handle any errors
  //   })
  // }
  componentDidMount() {
    this.unsubscribe = TutorialDataService.getAll().orderBy("timestamp", "asc").onSnapshot(this.onDataChange);
   this.check();
  }
  check(){
    auth.onAuthStateChanged(function(user) {
      if (user) {
        
        console.log(user);
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
        name: data.name,
        description: data.description,
        timestamp:  data.timestamp,
        userimage:data.userimage
      });
    });

    this.setState({
      tutorials: tutorials,
      
    });

    console.log(Math.floor(new Date().getTime()/1000.0))

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

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;
    // var user = auth.currentUser;
    return (
      <div style={{backgroundColor:'linen',marginTop:90}}>
      <div  style={{overflowX:'hidden'}}>
      {/* <ReactShadowScroll> */}
       <div className="row" style={{marginBottom:10}}>

           <div className="col-sm-4 ">
           <div className=" position-fixed">
               <Container>
               <Row style={{marginBottom:30}}>
    <Col xs={6} md={4} style={{paddingTop:5}}>
    <Image src={require('../images/passport.jpg')} width='80' height="80" roundedCircle />

 {/* <Badge variant="light">9</Badge> */}

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
   <strong>name</strong>
    
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
    <Image src={require('../images/passport.jpg')} width='40' height="40" roundedCircle />

 {/* <Badge variant="light">9</Badge> */}

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    Hamza Mugabo{'\n'}
    
 {/* <Badge variant="light">9</Badge> */}

    </Col>
    <Col xs={6} md={4} style={{paddingTop:20}}>
    
    View profile
 {/* <Badge variant="light">9</Badge> */}

    </Col>
   
  </Row>
  <div>
                 
               
               </div>
</Container>
               </div>
             
           
           </div>
          {tutorials.map((post,index)=>(

                <div className="col-sm-6" 
           style={{
            backgroundColor:'linen',
           
          }}
key={index}
           >

{/* {tutorials.map((tutorial, index) => ( */}
                
               <div 
               style={{
                   borderRadius:20,
                   backgroundColor:'white',
                   paddingLeft:20,
                   paddingRight:20,
                   alignItems:'center',
                   
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
               }}
              //  key={index}
               >
               <div>
               <Container>
  <Row>
    <Col xs={6} md={8}>
      <Image src={require('../images/passport.jpg')} width='60' height="60" roundedCircle />
    <strong> {post.name}</strong> 

    </Col>
    {/* <Col xs={6} md={4} style={{paddingTop:20}}>
    {post.name}
    </Col> */}
    <Col xs={6} md={4}  style={{paddingTop:20}}>
    {/* {moment(post.timestamp).startOf('hour').fromNow()}  */}

      {post.timestamp} delete
    </Col>
  </Row>
</Container>

               </div>
               <div>
                 
                 <Container style={{marginBottom:10}}>
      <Image src={post.userimage} width="100%" height="10%" />

                 </Container>
                
               </div>
               <div>
                 <Container>
               <Row>
                 <Col xs={6} md={12} style={{paddingTop:10}}>
    
              <strong>  {post.name} : {post.description}</strong>
 

    </Col>
     </Row>
     </Container>
               </div>
               <div>
               <Container>
  <Row>
    <Col xs={6} md={4} style={{paddingTop:20}}>
      like
 <Badge variant="light">9</Badge>

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
               {/* ))} */}


               {/* here */}
           </div>
             
           ))}
           <div className="col-sm-2"></div>

       </div>
      </div>
      </div>
    );
  }
}

export default Home;
