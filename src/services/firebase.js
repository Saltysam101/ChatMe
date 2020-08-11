import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBG9xtoFVzVQ26S9iGVyWH18hyri88D7MA",
    authDomain: "chatme-a21e6.firebaseapp.com",
    databaseURL: "https://chatme-a21e6.firebaseio.com",
    projectId: "chatme-a21e6",
    storageBucket: "chatme-a21e6.appspot.com",
    messagingSenderId: "263243803563",
    appId: "1:263243803563:web:d2148c91d3e489a98500ee",
    measurementId: "G-GVVTJ733YN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth;
  export const db = firebase.database();