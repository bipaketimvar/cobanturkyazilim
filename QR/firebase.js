// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

// Firebase proje bilgileriniz
const firebaseConfig = {
  apiKey: "AIzaSyCx0Ueoeu3oc9BlPWtFb4Lsk1RE2ac5Xsw",
  authDomain: "qrdavetiye-3d379.firebaseapp.com",
  projectId: "qrdavetiye-3d379",
  storageBucket: "qrdavetiye-3d379.firebasestorage.app",
  messagingSenderId: "200634620206",
  appId: "1:200634620206:web:290f64fe7a1db6ae3cc2bf",
  measurementId: "G-FFSMN0CL5J"
};

// Firebase uygulamasını başlatın
const app = initializeApp(firebaseConfig);

// Firestore veritabanı ve Auth servislerini dışa aktarın
export const db = getFirestore(app);
export const auth = getAuth(app);
