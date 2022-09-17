
import firebase from 'firebase/compat/app';
 import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCD76_FVsbCY_OTpCGU66IV-Aor-SPehoQ",
    authDomain: "chat-application-14048.firebaseapp.com",
    projectId: "chat-application-14048",
    storageBucket: "chat-application-14048.appspot.com",
    messagingSenderId: "1016653462507",
    appId: "1:1016653462507:web:189d68d9756083a5ed77ae",
    measurementId: "G-30VYLTQKV9"
});
    
const db = firebaseApp.firestore();

export default  db ;

