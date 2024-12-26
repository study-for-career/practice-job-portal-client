// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8cXSq05CBKA2tCvpVSJDyezBC_mYn8s4",
  authDomain: "job-portal-51701.firebaseapp.com",
  projectId: "job-portal-51701",
  storageBucket: "job-portal-51701.firebasestorage.app",
  messagingSenderId: "642062787006",
  appId: "1:642062787006:web:bde281e20ca06733e359ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;