import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
 

});

// firebase.initializeApp(config);
const auth = firebaseApp.auth();
const fire = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { fire, auth, storage };
// export default firebase.firestore();
