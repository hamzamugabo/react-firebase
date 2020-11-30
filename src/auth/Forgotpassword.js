import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// import firebase from "firebase/app";
// import 'firebase/auth';
import {auth} from "../firebase";

const authorization = auth;
 class Forgotpassword extends Component {
  constructor(props) {
    super(props);

    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      // username: "",
      email: "",
      password: "",
      errorMessage:null,
      loading:false,
      emailed:''
    };
  }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
this.setState({loading:true});

        e.preventDefault();
        
        
        console.log(`email: ${this.state.email}`);
     
        const newTodo = {
            // username: this.state.username,
            email: this.state.email,
        };

        authorization
        .sendPasswordResetEmail(newTodo.email)
        .then((success) => {
          console.log(success);
         
this.setState({loading:false,emailed:"we sent password reset link to your email"});
    
      })
      // history.push("/");
      .catch((error) => {
        // console.log(error);
this.setState({loading:false});

        this.setState({ errorMessage: error.message }); 
        //  this.setState({ loading: false, disabled: false });
    });

        this.setState({
            // username: '',
            email: '',
            password: '',
        })
    }
    login = () => {
      return this.props.history.push('/Legal');
      }
    
  render() {
    return (
      
      <div className="container ">
          <div className="col-md-3"></div>
          <div className="submit-form">
      <div style={{ marginTop: 10, alignItems:'center',justifyContent:'center' }}>
        {this.state.loading?"Loading...":null}
        {'\n'}
        <h3>Enter your email</h3>
       <p style={{color:'green'}}> {this.state.emailed}</p>
       <p style={{color:'red'}}> {this.state.errorMessage}</p>
        <form onSubmit={this.onSubmit}>
         
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
         

          <div className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            />
          </div>
        </form>
        <Button variant="link"  onClick={this.login.bind(this)}>Back to Login</Button>
       
      </div>
      </div>
      <div className="col-md-3"></div>
      </div>
    );
  }
}
export default Forgotpassword;