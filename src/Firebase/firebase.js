import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAkCUs9s0ulPcwgHIzq8izyuWVHU53WP7U",
    authDomain: "numeric-camp-311703.firebaseapp.com",
    projectId: "numeric-camp-311703",
    storageBucket: "numeric-camp-311703.appspot.com",
    messagingSenderId: "463644060644",
    appId: "1:463644060644:web:45a0143c5a3f443c9ff5f1",
    measurementId: "G-SY1PRT4ECC"
};

const firedb = firebase.initializeApp(firebaseConfig);
const db = firedb.database().ref();
export default db;

