import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'



var firebaseConfig = {
    apiKey: "AIzaSyC_D7WrkANM8IVSeRqonyYGXwFWXKDDaG4",
    authDomain: "olx-web-56e5b.firebaseapp.com",
    databaseURL: "https://olx-web-56e5b.firebaseio.com",
    projectId: "olx-web-56e5b",
    storageBucket: "olx-web-56e5b.appspot.com",
    messagingSenderId: "740386749492",
    appId: "1:740386749492:web:5255f555527239bece9e61",
    measurementId: "G-7DT5Z934SN"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;