// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDb2PAKSvbkcmzw7NS2VZmNOgFEnURK1zU",
    authDomain: "ema-jhon-simple-auth-a6ace.firebaseapp.com",
    projectId: "ema-jhon-simple-auth-a6ace",
    storageBucket: "ema-jhon-simple-auth-a6ace.appspot.com",
    messagingSenderId: "697215210890",
    appId: "1:697215210890:web:6a054ba877a003c2afe473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;