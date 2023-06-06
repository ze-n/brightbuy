import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoALOpCNAlad0Y8UIXSo4EvCoIvADebZA",
  authDomain: "ecommerce-app-react-6be37.firebaseapp.com",
  projectId: "ecommerce-app-react-6be37",
  storageBucket: "ecommerce-app-react-6be37.appspot.com",
  messagingSenderId: "548940532564",
  appId: "1:548940532564:web:60809d01ee4226d56996c1",
  measurementId: "G-2HFG4V3P1Y",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export { auth, fs, storage };
