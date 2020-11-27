import React, { Component } from "react";
import { BrowserRouter,Switch,Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Image,Badge } from 'react-bootstrap';
import add from './images/add.svg';
import notification from './images/notification.svg';
import people from './images/people.svg';
import settings from './images/settings.svg';
import sms from './images/sms.svg';
import home from './images/home.svg';

// import AddTutorial from "./components/add-tutorial.component";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div  style={{backgroundColor:"white"}}>
        <div  className=" fixed-top" style={{alignContent:'center',marginBottom:30, backgroundColor:'white'}}>

        <div className="row "  style={{paddingTop:20,paddingLeft:30 }}>
           <div className="col-sm-2">
      <Image src={settings} width="30" height="30" roundedCircle />

              {/* dropdown */}
           </div>
           <div className="col-sm-3" style={{paddingTop:0}}>
             <strong style={{fontSize:30}}> FarmersNet</strong>
              </div>
              <div className="col-sm-1">
      <Image src={require('./images/home.png')} width="30" height="30"  />

              {/* home */}
              </div>
              <div className="col-sm-1">
      <Image src={people} width="30" height="30" roundedCircle />
      <Badge variant="danger">9</Badge>

              {/* pple  */}
              </div>
              <div className="col-sm-1">
      <Image src={sms} width="30" height="30"  rounded/>
      <Badge variant="danger">9</Badge>

              {/* sms */}
              </div> <div className="col-sm-2">
      <Image src={add} width="30" height="30" roundedCircle />

              {/* dis */}
              </div> <div className="col-sm-1" >
      <Image src={notification} width="30" height="30" roundedCircle />
 <Badge variant="danger">9</Badge>
              {/* not */}
              </div> <div className="col-sm-1">
      <Image src={add} width="30" height="30"  />

              {/* add */}
              </div>

        </div>
        </div>
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
            
         <Route exact path="/" component={Home} />
         {/* <Route path="/register" component={Register} />
         <Route path="/home" component={Home} />
         <Route path="/admin" component={Admin} />
         <Route path="/addLegalAid" component={AddLegalAid} /> */}
          </Switch>
          </BrowserRouter>
          </div>
      </div>
    );
  }
}

export default App;
