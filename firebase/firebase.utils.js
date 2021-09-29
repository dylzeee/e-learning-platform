import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXAbCriVAPw6SQea9f2lQIOVA894p_oyI",
  authDomain: "musicemy-835d9.firebaseapp.com",
  projectId: "musicemy-835d9",
  storageBucket: "musicemy-835d9.appspot.com",
  messagingSenderId: "943558657643",
  appId: "1:943558657643:web:b3c119eeb0eb898fb3532e",
  measurementId: "G-E33RTTB01W"
};

export const createUserProfileDocument = async (userAuth, data) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider;
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;
