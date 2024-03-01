// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTBzvkxDaGFHFtbLrCOpk1oJ1D6Tg_Svs",
  authDomain: "vite-commerce-12f29.firebaseapp.com",
  projectId: "vite-commerce-12f29",
  storageBucket: "vite-commerce-12f29.appspot.com",
  messagingSenderId: "269261470990",
  appId: "1:269261470990:web:5938073ea726f8a4132b5f",
};

// Initialize Firebase
const commerceApp = initializeApp(firebaseConfig);

//my code

//authentication
const commerceAuth = getAuth(commerceApp);

//sign with google
const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopUp = async () =>
  await signInWithPopup(commerceAuth, googleProvider);

const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(commerceAuth, email, password);
};

const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(commerceAuth, email, password);
};

//firestore database
const commerceDb = getFirestore(commerceApp);

const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(commerceDb, "user", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("Error creating User", err.message);
    }
  }
  return userDocRef;
};

export {
  commerceDb,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
};
