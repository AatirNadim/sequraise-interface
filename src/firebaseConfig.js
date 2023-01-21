// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSnQfohx4x3yVtKK5rxiJ1iHS3oDuQng0",
  authDomain: "sequraise-interface.firebaseapp.com",
  projectId: "sequraise-interface",
  storageBucket: "sequraise-interface.appspot.com",
  messagingSenderId: "768879793522",
  appId: "1:768879793522:web:8809b55b3784771d6279eb",
  measurementId: "G-FBTBQP4P4F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

