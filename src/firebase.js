import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAB72I9IZRk9ZrwFutszCjcFkrdo8JwlIQ",
    authDomain: "hotstar-clone-a46e4.firebaseapp.com",
    projectId: "hotstar-clone-a46e4",
    storageBucket: "hotstar-clone-a46e4.appspot.com",
    messagingSenderId: "827311477836",
    appId: "1:827311477836:web:bd01e30a5f9e075dd2d0e9",
    measurementId: "G-VLHKJ549CF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
