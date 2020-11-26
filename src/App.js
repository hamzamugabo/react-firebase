import React, { Component } from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import AddTutorial from "./components/add-tutorial.component";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div  >
        <div  className="container" style={{alignContent:'center',marginBottom:9}}>
        <div className="row">
           <div className="col-sm-2">
              dropdown
           </div>
           <div className="col-sm-3">
             <strong> FarmersNet</strong>
              </div>
              <div className="col-sm-1">
              home
              </div>
              <div className="col-sm-1">
              pple 
              </div>
              <div className="col-sm-1">
              sms
              </div> <div className="col-sm-2">
              dis
              </div> <div className="col-sm-1">
              not
              </div> <div className="col-sm-1">
              add
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
    );
  }
}

export default App;
