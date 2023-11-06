// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBytp5wjo7feNvbP9Lp2gQX3W8BN6txfSY",
  authDomain: "restaurant-management-f5a0f.firebaseapp.com",
  projectId: "restaurant-management-f5a0f",
  storageBucket: "restaurant-management-f5a0f.appspot.com",
  messagingSenderId: "720327495661",
  appId: "1:720327495661:web:8ac779c84867b02dca61e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;