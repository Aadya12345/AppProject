import firebase from 'firebase';
require ('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_nThLcMo6jPYFgY4g1Na4Ete37ZMVqgE",
  authDomain: "appproject-c1994.firebaseapp.com",
  projectId: "appproject-c1994",
  storageBucket: "appproject-c1994.appspot.com",
  messagingSenderId: "74785868203",
  appId: "1:74785868203:web:99a2da0d4af03776f22aee",
  measurementId: "G-BFLD01KBBW"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();