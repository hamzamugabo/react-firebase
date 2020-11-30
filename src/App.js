import React, { Component } from "react";
import { BrowserRouter,Switch,Route} from "react-router-dom";
import {auth} from "./firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Image,Badge,Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import add from './images/add.svg';
import notification from './images/notification.svg';
import people from './images/people.svg';
import settings from './images/settings.svg';
import sms from './images/sms.svg';
import Register from './auth/Register';
import Login from './auth/Login';
import Loading from './auth/Loading';

import home from './images/home.svg';

// import AddTutorial from "./components/add-tutorial.component";
import Home from "./components/Home";
// import * as firebase from 'firebase';


// let config = {
//   apiKey: "AIzaSyADBGCpz7X3Mn_CplfhUUbSBjmyDqWvXhY",
//   authDomain: "farmersnet-clone.firebaseapp.com",
//   databaseURL: "https://farmersnet-clone.firebaseio.com",
//   projectId: "farmersnet-clone",
//   storageBucket: "farmersnet-clone.appspot.com",
//   messagingSenderId: "944813005265",
//   appId: "1:944813005265:web:dddfd4b9e904655aea28f0",
//   measurementId: "G-WWCE431BJ0"
// };

// firebase.initializeApp(config);

class App extends Component {
  render() {
    var user = auth.currentUser;

    // auth.onAuthStateChanged((user) => {
      if (user) {
        return (
          <div  style={{backgroundColor:"white"}}>
            <div  className=" fixed-top" style={{alignContent:'center',marginBottom:30, backgroundColor:'white'}}>
            <div className="container">
            <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home" >
    <Image src={settings} width="30" height="30" roundedCircle />
      FarmersNet
       </Navbar.Brand>
  
       <Navbar.Brand href="#home">
    
       </Navbar.Brand>
  
       <Navbar.Brand href="#home"  style={{float:'right'}}>
       <Image src={require('./images/home.png')} width="30" height="30"  />
      
       </Navbar.Brand>
       
       <Navbar.Brand href="#home">
       <Image src={people} width="30" height="30" roundedCircle />
      
          <Badge variant="danger">9</Badge>
         
   </Navbar.Brand>
   <Navbar.Brand href="#home">
   
   </Navbar.Brand>
  
   <Navbar.Brand href="#home">
   <Image src={sms} width="30" height="30"  rounded/>
          <Badge variant="danger">9</Badge>
   </Navbar.Brand>
  
   <Navbar.Brand href="#home">
   
   </Navbar.Brand>
  
   <Navbar.Brand href="#home">
   
   </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
       
  
        <Nav.Link href="#link">
  
          Discovery
        </Nav.Link>
  
        <Nav.Link href="#link">
        <Image src={notification} width="30" height="30" roundedCircle />
     <Badge variant="danger">9</Badge>
          
        </Nav.Link>
  
        <Nav.Link href="#link">
        <Image src={add} width="30" height="30"  />
  
          
        </Nav.Link>
        
       
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  </div>
            
            </div>
          
            <div>
             <BrowserRouter>
              <Switch>
                
             <Route exact path="/" component={Loading} />
             <Route exact path="/home" component={Home} />
             <Route path="/register" component={Register} />
             <Route path="/login" component={Login} />
            {/*  <Route path="/home" component={Home} />
             <Route path="/admin" component={Admin} />
             <Route path="/addLegalAid" component={AddLegalAid} /> */}
              </Switch>
              </BrowserRouter>
              </div>
          </div>
        );
      } else{
        return (
          <div className="conatiner"  style={{backgroundColor:"white",alignItems:'center'}}>
            {/* <div  className=" fixed-top" style={{alignContent:'center',marginBottom:30, backgroundColor:'white'}}> */}
            
            {/* <div className="row "  style={{paddingTop:20,paddingLeft:30 }}>
               <div className="col-sm-2">
          <Image src={settings} width="30" height="30" roundedCircle />
    
                 
               </div>
               <div className="col-sm-3" style={{paddingTop:0}}>
                 <strong style={{fontSize:30}}> FarmersNet</strong>
                  </div>
                  <div className="col-sm-1">
          <Image src={require('./images/home.png')} width="30" height="30"  />
    
                 
                  </div>
                  <div className="col-sm-1">
          <Image src={people} width="30" height="30" roundedCircle />
          <Badge variant="danger">9</Badge>
    
                  </div>
                  <div className="col-sm-1">
          <Image src={sms} width="30" height="30"  rounded/>
          <Badge variant="danger">9</Badge>
    
                  
                  </div> <div className="col-sm-2">
          <Image src={add} width="30" height="30" roundedCircle />
    
                  
                  </div> <div className="col-sm-1" >
          <Image src={notification} width="30" height="30" roundedCircle />
     <Badge variant="danger">9</Badge>
                  
                  </div> <div className="col-sm-1">
          <Image src={add} width="30" height="30"  />
    
                  
                  </div>
    
            </div> */}
            {/* </div> */}
            {/* <nav className="navbar navbar-expand navbar-light bg-light">
              <a href="/tutorials" className="navbar-brand">
                bezKoder
              </a>
              <a href="/tutorials" className="navbar-brand">
                bezKoder
              </a>
              <a href="/tutorials" className="navbar-brand">
                bezKoder
              </a>
             
            </nav>
    
            <div className="container mt-3">
              <h2>React Firestore CRUD</h2>
              <Switch>
                <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
                <Route exact path="/add" component={AddTutorial} />
              </Switch>
            </div> */}
            <div>
             <BrowserRouter>
              <Switch>
                
             <Route exact path="/" component={Loading} />
             <Route exact path="/home" component={Home} />
             <Route path="/register" component={Register} />
             <Route path="/login" component={Login} />
            {/*  <Route path="/home" component={Home} />
             <Route path="/admin" component={Admin} />
             <Route path="/addLegalAid" component={AddLegalAid} /> */}
              </Switch>
              </BrowserRouter>
              </div>
          </div>
        );
      }
    // });
      
    
   
  }
}

export default App;
