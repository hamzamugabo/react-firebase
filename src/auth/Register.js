import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth,fire,storage} from "../firebase";


export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangecity = this.onChangecity.bind(this);
    this.onChangephoto = this.onChangephoto.bind(this);
    this.onChangefulname = this.onChangefulname.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      displayName: "",
      fulname: "",
      photo: "",
      email: "",
      city:'',
      password: "",
      image:null,
      loading:false,
      errorMessage:null
    };
  }

  onChangeUsername(e) {
    this.setState({
      displayName: e.target.value,
    });
  }

  onChangefulname(e) {
    this.setState({
      fulname: e.target.value,
    });
  }
  onChangephoto(e) {
    this.setState({
      photo: e.target.files[0],
    });
    console.log(this.state.photo);
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangecity(e) {
    this.setState({
        city: e.target.value,
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
    console.log(`fulname: ${this.state.fulname}`);
    console.log(`email: ${this.state.email}`);
    console.log(`city: ${this.state.city}`);
    console.log(`photo: ${this.state.photo}`);
    console.log(`password: ${this.state.password}`);
    const formData = new FormData(); 
     
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.photo, 
      this.state.photo.name 
    ); 
   
    // Details of the uploaded file 
    console.log(this.state.photo); 
    console.log(formData); 
    
     auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
  
    
           .then((s)=> {
                  var user = auth.currentUser;
// console.log(user);
// storage.child(user.uid + ".png").getDownloadURL().then(url => {
//   this.setState({image:url})
//   // fire.collection("Users")
//   //                     .doc(data.id)
//   // .add({
//   //   image: url
//   // })
//   // .then(() => {
//   //   // setImgURL('')
//   // })
// });
// const ref = storage.child('images');
// const user_profile = ref.child(user.uid + ".png");

                  let data = {
                    name: this.state.displayName,
                    username: this.state.fulname,
                    email: this.state.email,
                    location: this.state.city,
                    id:user.uid,
                    image:this.state.image
                    
                  };
                  console.log(data)
                  fire.collection("Usernames")
                  .doc(data.name).set(
                    {
                      username:data.name
                    }
                  )
                    .then(() => {
                      console.log("Username added");
                      fire.collection("Users")
                      .doc(data.id).set(
                        data
                      )
                        .then(() => {
                          console.log("user added");
                         
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                     
                    })
                    .catch((e) => {
                      console.log(e);
                    });
 
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
               
           
    // };

    // this.setState({
    //   displayName: "",
    //   email: "",
    //   city: "",
    //   password: "",
    //   loading: false,
    // });
   
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
            {/* <label>Usename: </label> */}
            <label>
          Upload file:</label>
          <input type="file" onChange={this.onChangephoto} />
        
          </div>
          <div className="form-group">
            <label>Usename: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.displayName}
              onChange={this.onChangeUsername}
              required 
            />
          </div>
          <div className="form-group">
            <label>Full Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.fulname}
              onChange={this.onChangefulname}
              required 
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required 
            />
          </div>
          <div className="form-group">
            <label>City: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.city}
              onChange={this.onChangecity}
              required 
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              required 
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