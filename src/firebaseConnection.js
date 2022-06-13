import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyALJpvYQuzN_yEy4NUg24W3zK-tAQEE6n8",
  authDomain: "cursoapp-5a1df.firebaseapp.com",
  projectId: "cursoapp-5a1df",
  storageBucket: "cursoapp-5a1df.appspot.com",
  messagingSenderId: "502212551030",
  appId: "1:502212551030:web:4afc36899c7bd3aa0a9a57",
  measurementId: "G-Y2V00BCF52"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
