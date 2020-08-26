import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJn_xmkVs82oa1aj7Z3FNr-HQ4fN-6tGY",
    authDomain: "journalentries-1c57e.firebaseapp.com",
    databaseURL: "https://journalentries-1c57e.firebaseio.com",
    projectId: "journalentries-1c57e",
    storageBucket: "journalentries-1c57e.appspot.com",
    messagingSenderId: "450022309893",
    appId: "1:450022309893:web:cdf6e3be45dfa78d491c6c",
    measurementId: "G-EBERESW6D2"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  database.ref().set({
    name: 'Varan',
    age: 19
  }).then(() => {
      console.log('Data saved');
  }).catch((e) => {
    console.log('This failed', e);
  });