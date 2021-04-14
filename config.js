import  firebase from 'firebase'
require('@firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyCrieWOvZeGtqzs3U7PC8uUycyIO3uN_8U",
    authDomain: "bedtimestories-6f033.firebaseapp.com",
    databaseURL:"https://bedtimestories-6f033.firebaseio.com",
    projectId: "bedtimestories-6f033",
    storageBucket: "bedtimestories-6f033.appspot.com",
    messagingSenderId: "782017366963",
    appId: "1:782017366963:web:92ce0308f1aa68f18459c6"
  };

  if(!firebase.apps.length)
  {
     firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();