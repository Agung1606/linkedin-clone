// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMBbGruZDPnktUW0d75UDCjzsOI2rN4Dw",
  authDomain: "linkedin-clone-ac189.firebaseapp.com",
  projectId: "linkedin-clone-ac189",
  storageBucket: "linkedin-clone-ac189.appspot.com",
  messagingSenderId: "70067260884",
  appId: "1:70067260884:web:3d8b6d125e92656b5e9a41",
  measurementId: "G-VBXPTP630V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app)
export { app, auth, firestore, storage };