// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWpOdgHkLTrIvvrmD67_M93Rlv2MqAQQQ",
  authDomain: "plot-nest.firebaseapp.com",
  projectId: "plot-nest",
  storageBucket: "plot-nest.firebasestorage.app",
  messagingSenderId: "293090353687",
  appId: "1:293090353687:web:cb30daaf42f9dc2ca53252",
  measurementId: "G-VD8P2F9KX8",
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApps();

const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
