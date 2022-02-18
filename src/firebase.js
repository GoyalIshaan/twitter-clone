import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGEcP527CaZp33gR-TPygniQNll6qYsw8",
    authDomain: "twitter-clone-8c396.firebaseapp.com",
    projectId: "twitter-clone-8c396",
    storageBucket: "twitter-clone-8c396.appspot.com",
    messagingSenderId: "1099251869361",
    appId: "1:1099251869361:web:3935cb916061b5b2b3a490",
    measurementId: "G-6RW1PLW38C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;