import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAV3tMw8kypUetev8iML6Qnn6DhBYV1eik",
    authDomain: "imessage-5a135.firebaseapp.com",
    projectId: "imessage-5a135",
    storageBucket: "imessage-5a135.appspot.com",
    messagingSenderId: "93859001949",
    appId: "1:93859001949:web:a059af5990597df9b33fb4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;