import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEwxOeMsq0tmOWuI8AHbC6J_-g2JRrkQ0",
  authDomain: "oscar-muya.firebaseapp.com",
  projectId: "oscar-muya",
  storageBucket: "oscar-muya.appspot.com",
  messagingSenderId: "230844944116",
  appId: "1:230844944116:web:5e9061434a9f531d76d8a1",
  measurementId: "G-XC3MPH4TCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);
const googleAuthProvider = new GoogleAuthProvider();
export { auth, storage, db, googleAuthProvider };
export default db;