// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY2pJPAghK4x443AKuJ0nlcI2OUBYuXC0",
  authDomain: "noteweb101.firebaseapp.com",
  projectId: "noteweb101",
  storageBucket: "noteweb101.appspot.com",
  messagingSenderId: "646039297966",
  appId: "1:646039297966:web:f40b791ac3d96b7d8af23f",
  measurementId: "G-BYWRQV8RJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;