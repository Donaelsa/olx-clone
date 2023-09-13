
import firebase from 'firebase';
import database from 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBu0_xzzcEq-Vjtta6QCSZAF_oAyleRd-8",
    authDomain: "olxclone-b82f0.firebaseapp.com",
    projectId: "olxclone-b82f0",
    storageBucket: "olxclone-b82f0.appspot.com",
    messagingSenderId: "62543657413",
    appId: "1:62543657413:web:e8be966f74a65b1077b3ac",
    measurementId: "G-2J9E3J6QM7"
  };

  export default firebase.initializeApp(firebaseConfig);
  
  
//   export default {Firebase};
   
  