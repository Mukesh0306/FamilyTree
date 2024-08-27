// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace with your own Firebase credentials
const firebaseConfig = {
    apiKey: "AIzaSyBo-4UL8UpcOPSPOhQCROCUNzx_gepyRpw",
    authDomain: "familytree-0306.firebaseapp.com",
    projectId: "familytree-0306",
    storageBucket: "familytree-0306.appspot.com",
    messagingSenderId: "563734743786",
    appId: "1:563734743786:web:88501e5d9f7112b6ffa593",
    measurementId: "G-ZRW3CMH67T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
