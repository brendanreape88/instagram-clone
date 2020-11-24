import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhHZc6DFSElBdHEBmrCI4nmqxGQ_1nHuw",
  authDomain: "instagram-client-d08fd.firebaseapp.com",
  databaseURL: "https://instagram-client-d08fd.firebaseio.com",
  projectId: "instagram-client-d08fd",
  storageBucket: "instagram-client-d08fd.appspot.com",
  messagingSenderId: "194410314422",
  appId: "1:194410314422:web:c8355cdb51f314a88d8417",
  measurementId: "G-CH8XJCF8K5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
