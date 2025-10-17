// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqAP6o1lWOywx_gzNGfilH2jiKhZggsvI",
  authDomain: "fir-fighter-bcf27.firebaseapp.com",
  projectId: "fir-fighter-bcf27",
  storageBucket: "fir-fighter-bcf27.firebasestorage.app",
  messagingSenderId: "970403372339",
  appId: "1:970403372339:web:abb67e8ba4d063b0117246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);