import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDC1uD6D4nAa6wQ-m1UAJeySdxKeeYX0GU",
    authDomain: "clone-854d8.firebaseapp.com",
    databaseURL: "https://clone-854d8-default-rtdb.firebaseio.com/",
    projectId: "clone-854d8",
    storageBucket: "clone-854d8.appspot.com",
    messagingSenderId: "140548258064",
    appId: "1:140548258064:web:1122f8ba87b2b82e7ecd95",
    measurementId: "G-0X2LCR5ZGH"
});


const auth = firebase.auth();

export { auth };