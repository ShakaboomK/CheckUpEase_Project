// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoRyR8yVfMJWg4gcYly3R7bVagS07Js5s",
    authDomain: "checkup-ease.firebaseapp.com",
    projectId: "checkup-ease",
    storageBucket: "checkup-ease.appspot.com",
    messagingSenderId: "562178882154",
    appId: "1:562178882154:web:8b51b35b9adbe327d8e813",
    measurementId: "G-JJ46K3WZNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);