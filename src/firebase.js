import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoWKrQIV32fx7-zeQ9jF4fYLMx38tRAXI",
  authDomain: "clone-45497.firebaseapp.com",
  projectId: "clone-45497",
  storageBucket: "clone-45497.appspot.com",
  messagingSenderId: "303907033655",
  appId: "1:303907033655:web:e857c7d93406045358e5b2",
  measurementId: "G-BKHWL4G0DJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };