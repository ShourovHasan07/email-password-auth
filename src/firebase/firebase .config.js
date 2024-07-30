// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6rqeaSsEr1pFu0OEnBU01g2DcnSEV5I4",
  authDomain: "email-password-auth-9897b.firebaseapp.com",
  projectId: "email-password-auth-9897b",
  storageBucket: "email-password-auth-9897b.appspot.com",
  messagingSenderId: "575757692769",
  appId: "1:575757692769:web:a31d926bd88e8669639f20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

