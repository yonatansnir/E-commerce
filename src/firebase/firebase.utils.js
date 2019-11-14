import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-mYxNU7TJfm7XVXBTxEqTvgb2yvB-Ay8",
  authDomain: "crwn-db-f2361.firebaseapp.com",
  databaseURL: "https://crwn-db-f2361.firebaseio.com",
  projectId: "crwn-db-f2361",
  storageBucket: "crwn-db-f2361.appspot.com",
  messagingSenderId: "106887005859",
  appId: "1:106887005859:web:5df895674b8f27eac52116",
  measurementId: "G-C0CM9M1FNH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
