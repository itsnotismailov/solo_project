// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdSP9hWl1wLUGxqu6z9NQ6aYRYpqOR1Hs",
  authDomain: "solo-52312.firebaseapp.com",
  projectId: "solo-52312",
  storageBucket: "solo-52312.appspot.com",
  messagingSenderId: "315372984947",
  appId: "1:315372984947:web:fb852ef794bdeaacba6806",
  measurementId: "G-SWH9YX6M2W"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
