// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBogyojb7XtTp-K0pJgDdTARPKLRlt3dAk",
  authDomain: "bugtracker-23612.firebaseapp.com",
  projectId: "bugtracker-23612",
  storageBucket: "bugtracker-23612.appspot.com",
  messagingSenderId: "463517581821",
  appId: "1:463517581821:web:00e7e15ed095c316fa9994",
  measurementId: "G-9MT4T1GRV0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };