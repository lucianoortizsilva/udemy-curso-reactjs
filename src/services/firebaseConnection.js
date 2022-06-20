import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

let firebaseConfig = {
  apiKey: "AIzaSyB6DtA96-4oPdsf05sxl5Qmh_oYIQTdW6k",
  authDomain: "sistema-a9310.firebaseapp.com",
  projectId: "sistema-a9310",
  storageBucket: "sistema-a9310.appspot.com",
  messagingSenderId: "642858192408",
  appId: "1:642858192408:web:3deedb6407e9a53efafd6d",
  measurementId: "G-DW6D51SRN2"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;