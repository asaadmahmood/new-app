import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDj8gABpv5xqIpOOBuwdSi4kGDGcolfk3o",
  authDomain: "new-app-8e5f8.firebaseapp.com",
  databaseURL: "https://new-app-8e5f8.firebaseio.com",
  projectId: "new-app-8e5f8",
  storageBucket: "new-app-8e5f8.appspot.com",
  messagingSenderId: "978393273104",
  appId: "1:978393273104:web:8be59940f764e2fefa4b95",
  measurementId: "G-718BZHMJC7"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
