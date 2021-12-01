// src/firebaseConfig.js
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

  const firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth()


// Initialize Firebase
export{
  auth
}