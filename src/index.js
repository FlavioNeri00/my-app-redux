import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// eslint-disable-next-line
import firebase from './firebase';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: "AIzaSyDGZMe0a1veaduHXAkSieXtkhaxUmZxzQ0",
//   authDomain: "epicode-1492f.firebaseapp.com",
//   projectId: "epicode-1492f",
//   storageBucket: "epicode-1492f.appspot.com",
//   messagingSenderId: "184623171921",
//   appId: "1:184623171921:web:ffaa59f9724911eb962b70",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
