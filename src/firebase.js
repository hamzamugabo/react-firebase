import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  // apiKey: "AIzaSyADBGCpz7X3Mn_CplfhUUbSBjmyDqWvXhY",
  // authDomain: "farmersnet-clone.firebaseapp.com",
  // databaseURL: "https://farmersnet-clone.firebaseio.com",
  // projectId: "farmersnet-clone",
  // storageBucket: "farmersnet-clone.appspot.com",
  // messagingSenderId: "944813005265",
  // appId: "1:944813005265:web:dddfd4b9e904655aea28f0",
  // measurementId: "G-WWCE431BJ0"

  apiKey: "AIzaSyBrlE1tijWl59LtCty-dFW6ES4c5qp5neE",
  authDomain: "farmersnet-24386.firebaseapp.com",
  databaseURL: "https://farmersnet-24386.firebaseio.com",
  projectId: "farmersnet-24386",
  storageBucket: "farmersnet-24386.appspot.com",
  messagingSenderId: "346472012431",
  appId: "1:346472012431:web:e548bc79dd962665512efa",
  measurementId: "G-LCW0QK06PB"

});

// firebase.initializeApp(config);
const auth = firebaseApp.auth();
const fire = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { fire, auth, storage };
// export default firebase.firestore();
