import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqEMWc3_DoKGGQzHXbrahNsG8mZ9LaB3c",
    authDomain: "instagram-clone-react-59119.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-59119-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-59119",
    storageBucket: "instagram-clone-react-59119.appspot.com",
    messagingSenderId: "309053915042",
    appId: "1:309053915042:web:b9f003ce8583b2b06f7cfb",
    measurementId: "G-TG2HHHXBS5"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
