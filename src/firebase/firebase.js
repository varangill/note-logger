import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
  //measurementId: "G-EBERESW6D2"
};

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


export {database as default, firebase, googleAuthProvider};