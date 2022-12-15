import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnYnU3IJ1N7G6JOx60unW5r3AxqY5ffwk",
  authDomain: "catch-of-the-day-860fd.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-860fd-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-860fd",
  storageBucket: "catch-of-the-day-860fd.appspot.com",
  messagingSenderId: "736421451298",
  appId: "1:736421451298:web:ff3104bcf24aa6468c5c7b",
  measurementId: "G-M8JJYZC7DV",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp, base };
