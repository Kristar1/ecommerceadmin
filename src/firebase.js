// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN1mrOfVKwDiP_pxpEULhv4sFMY_FifLY",
  authDomain: "shop-d4341.firebaseapp.com",
  projectId: "shop-d4341",
  storageBucket: "shop-d4341.appspot.com",
  messagingSenderId: "799866997258",
  appId: "1:799866997258:web:f91de5bba9142507d02df3",
  measurementId: "G-4B2VC9JLLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;