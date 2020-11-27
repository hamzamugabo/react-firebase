import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyADBGCpz7X3Mn_CplfhUUbSBjmyDqWvXhY",
  authDomain: "farmersnet-clone.firebaseapp.com",
  databaseURL: "https://farmersnet-clone.firebaseio.com",
  projectId: "farmersnet-clone",
  storageBucket: "farmersnet-clone.appspot.com",
  messagingSenderId: "944813005265",
  appId: "1:944813005265:web:dddfd4b9e904655aea28f0",
  measurementId: "G-WWCE431BJ0"
};

firebase.initializeApp(config);

export default firebase.firestore();
