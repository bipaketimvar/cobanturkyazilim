// Firebase Ortak Bağlantı Dosyası (firebase.js)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    deleteDoc, 
    collection, 
    getDocs, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyCDhv1bqObDLle1tC3C3DLud2LAJA2NKH4", 
    authDomain: "cturkyzlm.firebaseapp.com", 
    projectId: "cturkyzlm", 
    storageBucket: "cturkyzlm.firebasestorage.app", 
    messagingSenderId: "644228782048", 
    appId: "1:644228782048:web:37cf7c0c0de73d4375fd85" 
};

// Firebase Servislerini Başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Diğer Sayfalarda Kullanmak Üzere Dışa Aktar
export { 
    app, 
    auth, 
    db, 
    firebaseConfig,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signOut, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    deleteDoc, 
    collection, 
    getDocs, 
    serverTimestamp 
};