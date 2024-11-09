import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDxymBG-_yRFnL-vqqTtDqbdp1lrZlUBU",
  authDomain: "appfirebase-e347e.firebaseapp.com",
  projectId: "appfirebase-e347e",
  storageBucket: "appfirebase-e347e.firebasestorage.app",
  messagingSenderId: "103615237143",
  appId: "1:103615237143:android:94a09e695a874b56eca052",
};

if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
