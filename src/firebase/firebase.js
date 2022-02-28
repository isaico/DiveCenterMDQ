import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDzBLIq12hfki-ff-TaUorMNurnv30-eNw",
    authDomain: "divecentermdq.firebaseapp.com",
    projectId: "divecentermdq",
    storageBucket: "divecentermdq.appspot.com",
    messagingSenderId: "392959372061",
    appId: "1:392959372061:web:68f80db965933f3bafcff4",
    measurementId: "G-1PGL02L0V1",
});
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
