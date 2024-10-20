
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-qZLTJQTXQ6N6x4VVpgXSyvwXja1rTuQ",
  authDomain: "finance-tracker-61f61.firebaseapp.com",
  projectId: "finance-tracker-61f61",
  storageBucket: "finance-tracker-61f61.appspot.com",
  messagingSenderId: "105394680674",
  appId: "1:105394680674:web:84ff76645e26898fb6b23b",
  measurementId: "G-8J3D8DZPQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
