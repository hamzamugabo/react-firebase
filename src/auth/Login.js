import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import {auth} from "../firebase";


 class Login extends Component {
  constructor(props) {
    super(props);

    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      // username: "",
      email: "",
      password: "",
      errorMessage:null,
      loading:false,
      verified:''
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
        
        console.log(`Form submitted:`);
        // console.log(`username: ${this.state.username}`);
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
     
        const newTodo = {
            // username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };

        auth
        .signInWithEmailAndPassword(newTodo.email,newTodo.password)
        .then((success) => {
          var user =auth.currentUser;

          if (user.emailVerified) {
          //   
    var newUser = newTodo.email;
    // var email_edit1 = newUser.replace('@', '-');

    // var newString2 = newUser.replace(/[^0-9a-z]/gi, '-');
    this.props.history.push("/home");

          } else {
this.setState({verified:"Verify your email first"});
this.setState({loading:false});
            
          }
      })
      // history.push("/");
      .catch((error) => {
        // console.log(error);
this.setState({loading:false});

        this.setState({ errorMessage: error.message }); 
        //  this.setState({ loading: false, disabled: false });
    });

      //   axios
      // .post("http://localhost:4000/todos/login", newTodo)
      // .then((res) => {
        
      //   return this.props.history.push("/home");
        // console.log(res.data)
        //   alert(res.data)
        // if(res=="registered successfully"){
          
        // console.log(res.data)

        // }
        // else{
        //   console.log(res.data)
        //   alert(res.data)
        // }
        // });
        this.setState({
            // username: '',
            email: '',
            password: '',
        })
    }
    register = () => {
      return this.props.history.push('/register');
      }
      password = () => {
        return this.props.history.push('/forgotpassword');
        }
    
  render() {
   
    return (
      
      <div className="container ">
          <div className="col-md-3"></div>
          <div className="submit-form">
      <div style={{ marginTop: 10, alignItems:'center',justifyContent:'center' }}>
        {this.state.loading?"Loading...":null}
        {'\n'}
        <h3>Login</h3>
       <p style={{color:'red',fontSize:20}}> {this.state.verified}</p>
       <p style={{color:'red',fontSize:20}}> {this.state.errorMessage}</p>
        <form onSubmit={this.onSubmit}>
          {/* <div className="form-group">
            <label>Usename: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div> */}
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
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary"
            />
          </div>
        </form>
        <Button variant="link"  onClick={this.password.bind(this)}>Forgotpassword</Button>

        <Button variant="link"  onClick={this.register.bind(this)}>No account? Register</Button>
        {/* <button onClick={this.register.bind(this)}>No account? Register</button> */}
        {/* <Router>
        <Link to={"/register/"}>click to Register</Link> */}
        
        {/* <Route path="/register" component={Register} /> */}
        {/* </Router> */}
      </div>
      </div>
      <div className="col-md-3"></div>
      </div>
    );
  }
}
export default Login;