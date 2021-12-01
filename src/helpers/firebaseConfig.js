// src/firebaseConfig.js
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyD_ADYolN0_71NdtK6FEo4xUOLaepF85g8",
    authDomain: "bioartagger.firebaseapp.com",
    projectId: "bioartagger",
    storageBucket: "bioartagger.appspot.com",
    messagingSenderId: "416358619193",
    appId: "1:416358619193:web:b78a86984cf813caadd5e8"
};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth()


// Initialize Firebase
export{
  auth
}