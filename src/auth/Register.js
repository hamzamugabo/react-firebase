import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth,fire} from "../firebase";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTellphone = this.onChangeTellphone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      displayName: "",
      email: "",
      tellphone:'',
      password: "",
      loading:false,
      errorMessage:null
    };
  }

  onChangeUsername(e) {
    this.setState({
      displayName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeTellphone(e) {
    this.setState({
        tellphone: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    this.setState({
      loading: true,
    });
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`displayName: ${this.state.displayName}`);
    console.log(`email: ${this.state.email}`);
    console.log(`tellphone: ${this.state.tellphone}`);
    console.log(`password: ${this.state.password}`);

    // const newTodo = {
    //   displayName: this.state.displayName,
    //   email: this.state.email,
    //   tellphone: this.state.tellphone,
    //   password: this.state.password,
    // };
   
    // handleSignUp = () => {
        // this.setState({ loading: true, disabled: true });
     auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
  //    .then((userCredentials)=>{
  //     if(userCredentials.user){
  //       userCredentials.user.updateProfile({
  //         displayName: this.state.displayName,
  //       }).then((s)=> {
  //         // this.props.navigation.navigate('Account');
  //         console.log(s);
  //       })
  //     }
  // })
  // .catch(function(error) {
  //   alert(error.message);
  // });
            .then(userCredentials => {
              
                userCredentials.user.updateProfile({
                    displayName: this.state.displayName,
                    phoneNumber: this.state.tellphone
                }).then((s)=> {
                  var user = auth.currentUser;
              // console.log(user.email);
                        user.sendEmailVerification().then(function() {
                          // console.log("success")
                        }).catch(function(error) {
                          console.log(error);
                        });
                this.props.history.push("/login");
                }).  catch((error) => {
                  console.log(error);
                  this.setState({ errorMessage: error.message }); 
                  //  this.setState({ loading: false, disabled: false });
              });
               
            })
            .catch((error) => {
              console.log(error);
              this.setState({ errorMessage: error.message }); 
              //  this.setState({ loading: false, disabled: false });
          });
      
    // };

    this.setState({
      displayName: "",
      email: "",
      tellphone: "",
      password: "",
      loading: false,
    });
   
  }

 
  login = () => {
    return this.props.history.push('/login');
    }
  render() {
    return (
      <div className="container">
      <div className="submit-form">
        
      {this.state.loading?"Loading...":null}
        <h3>Register</h3>
    <p style={{color:'red'}}>{this.state.errorMessage}</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Usename: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.displayName}
              onChange={this.onChangeUsername}
            />
          </div>
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
            <label>Phone Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tellphone}
              onChange={this.onChangeTellphone}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
        {/* <button onClick={this.login.bind(this)}>Back to Login</button> */}
        <Button variant="link"  onClick={this.login.bind(this)}>Back to Login</Button> 
      </div>
      </div>
    );
  }
}