import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRBASE_KEY,
  authDomain: process.env.REACT_APP_FIRBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRBASE_DB_URL,
  projectId: process.env.REACT_APP_FIRBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIRBASE_MESSAGING,
  appId: process.env.REACT_APP_FIRBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
