import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {

  apiKey: "AIzaSyByz9wtYUjhMHQgbQcCt6zGgpI-ddLgJLg",

  authDomain: "netflix-clone-2-13300.firebaseapp.com",

  projectId: "netflix-clone-2-13300",

  storageBucket: "netflix-clone-2-13300.appspot.com",

  messagingSenderId: "825098857083",

  appId: "1:825098857083:web:3f70c52425c9a74c5bd0de"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;