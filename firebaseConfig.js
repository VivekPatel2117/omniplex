import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyBbPO3Z3-hXR6NaJSs2EqN4uDw9I4vQ7Dk",
  authDomain: "omniplex-9e2e6.firebaseapp.com",
  projectId: "omniplex-9e2e6",
  storageBucket: "omniplex-9e2e6.firebasestorage.app",
  messagingSenderId: "1075370583351",
  appId: "1:1075370583351:web:be7466cced60a8152266b2",
  measurementId: "G-03SZHMQLP6"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
