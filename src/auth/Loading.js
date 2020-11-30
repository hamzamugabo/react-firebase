// Loading.js
import React, { Component } from "react";
import {auth} from "../firebase";

// import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
export default class Loading extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      disabled: false,
      errorMessage: null,
      terms: false,
      currentUser: null,
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const {currentUser} = auth;

        //  const { profileImageUrl } = this.state;

        this.setState({currentUser});
        //
        this.state.username = currentUser && currentUser.displayName;
        this.state.email = currentUser && currentUser.email;

        // var user = currentUser && currentUser.email;
        var removechar = currentUser && currentUser.email;

        // var originalString = removechar;
        // var newString1 = originalString.replace('@', '- ');

        var newString2 = removechar.replace(/[^0-9a-z]/gi, '-');
        this.props.history.push("/home");

        
      } else {
        this.props.history.push("/login");
        
      }
    });
  }
  render() {
    return (
      <div style={{alignItems:'center'}}>
        {/* <Image
          style={{width: 70, height: 70}}
          source={require('../images/Loginlogo.png')}
        /> */}
        Loading...
       
      </div>
    );
  }
}

