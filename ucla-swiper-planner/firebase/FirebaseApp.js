// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "REDACTED-API-KEY",
  // authDomain: "REDACTED-AUTH-DOMAIN",
  // databaseURL: "REDACTED-DATABASE-URL",
  // projectId: "REDACTED-PROJECT-ID",
  // storageBucket: "REDACTED-STORAGE-BUCKET",
  // messagingSenderId: "REDACTED-MESSAGING-SENDER-ID",
  // appId: "REDACTED-APP-ID",
  // measurementId: "REDACTED-MEASUREMENT-ID"


  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Initialize Firestore
export const db = getFirestore(app);
