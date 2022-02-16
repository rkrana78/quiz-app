// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC32mV7YvXXQ1Ve2FrE1y-DhNjYxTqCp_8",
  authDomain: "quiz-dev-e04a4.firebaseapp.com",
  databaseURL: "https://quiz-dev-e04a4-default-rtdb.asia-southeast1.firebasedatabase.app" ,
  projectId: "quiz-dev-e04a4",
  storageBucket: "quiz-dev-e04a4.appspot.com",
  messagingSenderId: "823193342068",
  appId: "1:823193342068:web:186d558e9e299925854121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app