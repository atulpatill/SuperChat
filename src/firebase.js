
import firebase from 'firebase';
import 'firebase/database'; 
import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDbRW9_F--MQdhOXZ6IUNfEBrcw92fZCsI",
  authDomain: "superchat-81638.firebaseapp.com",
  projectId: "superchat-81638",
  storageBucket: "superchat-81638.appspot.com",
  messagingSenderId: "263768869536",
  appId: "1:263768869536:web:aa969dfc327082d40357c5"
})

const db = firebaseApp.firestore()


const auth = firebase.auth()

export { db, auth }