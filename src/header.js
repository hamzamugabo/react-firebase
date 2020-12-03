import React, { Component } from "react";
import { BrowserRouter,Switch,Route} from "react-router-dom";
import {auth} from "./firebase";

import "bootstrap/dist/css/bootstrap.min.css";
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

class Header extends Component {
  render() {
    var user = auth.currentUser;
// console.log(user);
    // auth.onAuthStateChanged((user) => {
      
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
          
          </div>
        );
     
      }
      
    
   
  }


export default Header;
