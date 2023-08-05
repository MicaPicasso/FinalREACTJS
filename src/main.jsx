import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAr9T_BryHFnJa3aekM1xkhbymnfabRhs",
  authDomain: "zandra-d5a7b.firebaseapp.com",
  projectId: "zandra-d5a7b",
  storageBucket: "zandra-d5a7b.appspot.com",
  messagingSenderId: "126144453114",
  appId: "1:126144453114:web:a00bab945251c67de6ac43"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
