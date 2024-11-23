import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSxivyc3e0ZU84_3v76SMgOuvcrLnSaAk",
  authDomain: "new-react-practice.firebaseapp.com",
  projectId: "new-react-practice",
  storageBucket: "new-react-practice.firebasestorage.app",
  messagingSenderId: "112585398930",
  appId: "1:112585398930:web:e7bfdde9e028ea5fbba44b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;