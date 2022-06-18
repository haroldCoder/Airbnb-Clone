import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBU_mqTXJxmFNxmd1FEeg5bfweyBzy_ZL4",
  authDomain: "airbnb-clone-61212.firebaseapp.com",
  projectId: "airbnb-clone-61212",
  storageBucket: "airbnb-clone-61212.appspot.com",
  messagingSenderId: "959717535489",
  appId: "1:959717535489:web:2fb4be5f2b2aef4cb9b500",
  measurementId: "G-7BXVVZ6W9V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
