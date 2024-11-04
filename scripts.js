
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJ73K4jLkMsydcqnBjWB8dULr4l6bYmDY",
    authDomain: "halo-vma-capstone.firebaseapp.com",
    projectId: "halo-vma-capstone",
    storageBucket: "halo-vma-capstone.firebasestorage.app",
    messagingSenderId: "303509470531",
    appId: "1:303509470531:web:9f6cde81ef1fa92deec3f6",
    measurementId: "G-6X94QTSPQ4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
