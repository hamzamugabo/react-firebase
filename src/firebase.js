import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADBGCpz7X3Mn_CplfhUUbSBjmyDqWvXhY",
  authDomain: "farmersnet-clone.firebaseapp.com",
  databaseURL: "https://farmersnet-clone.firebaseio.com",
  projectId: "farmersnet-clone",
  storageBucket: "farmersnet-clone.appspot.com",
  messagingSenderId: "944813005265",
  appId: "1:944813005265:web:dddfd4b9e904655aea28f0",
  measurementId: "G-WWCE431BJ0"
});

// firebase.initializeApp(config);
const auth = firebaseApp.auth();
const fire = firebaseApp.firestore();
const storage = firebaseApp.storage().ref('images');

export { fire, auth, storage };
// export default firebase.firestore();
