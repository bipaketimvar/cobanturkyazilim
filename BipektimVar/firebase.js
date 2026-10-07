import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase Bilgileriniz
const firebaseConfig = {
  apiKey: "AIzaSyDz82gACX1xpBmAqASt5s1DxW74Q8ZVWK0",
  authDomain: "digitaldavet-b2965.firebaseapp.com",
  projectId: "digitaldavet-b2965",
  storageBucket: "digitaldavet-b2965.firebasestorage.app",
  messagingSenderId: "951997106446",
  appId: "1:951997106446:web:45e33cebe6da521db56f5f",
  measurementId: "G-3TXQDY8EYM"
};

// Firebase Servislerinin Başlatılması
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
