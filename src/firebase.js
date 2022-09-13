// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Qdzemfhl1NLutQpb9h62xNL24wtioHI",
  authDomain: "portfolio-dashboard-e18e2.firebaseapp.com",
  projectId: "portfolio-dashboard-e18e2",
  storageBucket: "portfolio-dashboard-e18e2.appspot.com",
  messagingSenderId: "706432706794",
  appId: "1:706432706794:web:9f5d16a0b77d688086cf93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const providor = new GoogleAuthProvider();


export const signInWithGoogle = () => signInWithPopup(auth,providor);
