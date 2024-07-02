import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB--s3CQjnFTMBWGN-Yp-z4QqyMeZzLKQI",
  authDomain: "sticky-note-8c32b.firebaseapp.com",
  projectId: "sticky-note-8c32b",
  storageBucket: "sticky-note-8c32b.appspot.com",
  messagingSenderId: "581285297344",
  appId: "1:581285297344:web:6d3e28952e13fce9f78125",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const notesRef = collection(db, "notes");

export { db, auth, provider, notesRef };
