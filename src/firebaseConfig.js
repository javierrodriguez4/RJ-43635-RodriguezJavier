
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs2XSAsG7WGTZLP4CRcfgqzX4o5EVVqSE",
  authDomain: "rj-43635-rodriguezjavier.firebaseapp.com",
  projectId: "rj-43635-rodriguezjavier",
  storageBucket: "rj-43635-rodriguezjavier.appspot.com",
  messagingSenderId: "132644252077",
  appId: "1:132644252077:web:fe2758be7b6e0e77431924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)