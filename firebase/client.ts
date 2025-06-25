// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm5Kk6-5Rqjx8T5gkEtbP0mYZid-W04K8",
  authDomain: "prepwise-95a43.firebaseapp.com",
  projectId: "prepwise-95a43",
  storageBucket: "prepwise-95a43.firebasestorage.app",
  messagingSenderId: "21350123392",
  appId: "1:21350123392:web:8977c20383d52c9a53a365",
  measurementId: "G-FZ0CTX9HY7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);