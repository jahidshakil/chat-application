
import firebase from 'firebase/compat/app';
 import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwwwU0kihtUN0afE3VRSd8sDVXDZPSLps",
    authDomain: "messenger-clone-d1990.firebaseapp.com",
    projectId: "messenger-clone-d1990",
    storageBucket: "messenger-clone-d1990.appspot.com",
    messagingSenderId: "79066669549",
    appId: "1:79066669549:web:8deb7501c31d85a6f107e4"
});
    
const db = firebaseApp.firestore();

export default  db ;