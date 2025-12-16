import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAgPng13B8v8qKd7VVMC_p4mg8WICO-Wg",
  authDomain: "studyplanner-19b09.firebaseapp.com",
  projectId: "studyplanner-19b09",
  storageBucket: "studyplanner-19b09.firebasestorage.app",
  messagingSenderId: "1063259676198",
  appId: "1:1063259676198:web:aebe5e7e3cd451ecc650e7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
