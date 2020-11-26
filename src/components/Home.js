import React, { Component } from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import {Image,Row,Col,Container} from 'react-bootstrap';
import passport from '../images/passport.jpg';
// import "./App.css";

// import AddTutorial from "./components/add-tutorial.component";
// import Home from "./components/Home";

class Home extends Component {
  render() {
    return (
      <div className="container" >
       <div className="row">

           <div className="col-sm-2" style={{backgroundColor:'lightgrey'}}>1</div>
           <div className="col-sm-8" 
           style={{
            backgroundColor:'linen'
          }}

           >
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
               >
               <div>
               <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={require('../images/passport.jpg')} width='60' height="60" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
    Hamza Mugabo
    </Col>
    <Col xs={6} md={4}>
      2 hours ago
    </Col>
  </Row>
</Container>

               </div>
               <div>
                 
                 <Container>
      <Image src={require('../images/ic_launcher.png')} width="100%" height="10%" />

                 </Container>
               </div>
               <div>comment</div>
               <div>icons</div>
               </div>
           </div>
           <div className="col-sm-2" style={{backgroundColor:'lightsteelblue'}}>3</div>

       </div>
         
      </div>
    );
  }
}

export default Home;
