import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAr6amuVrn9Pc2cmVktYTgGoAMV-Li9HZY',
  authDomain: 'slack-clone-dbfff.firebaseapp.com',
  databaseURL: 'https://slack-clone-dbfff.firebaseio.com',
  projectId: 'slack-clone-dbfff',
  storageBucket: 'slack-clone-dbfff.appspot.com',
  messagingSenderId: '145549540114',
  appId: '1:145549540114:web:1a8523bdcd6c5da8b6d1cb',
  measurementId: 'G-HJHJQYWRFR',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
