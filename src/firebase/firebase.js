import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-gsYDhvCi3Fqvl7SXWpcKA8IAiIKqk44', //TODO: process.env.FIREBASE_API_KEY,
  authDomain: 'vuejs-yjs-app.firebaseapp.com',
  projectId: 'vuejs-yjs-app',
  storageBucket: 'vuejs-yjs-app.appspot.com',
  messagingSenderId: '392077488694',
  appId: '1:392077488694:web:b5a1b9caeed1a68d105e97',
  // databaseURL: "https://vuejs-yjs-app-default-rtdb.firebaseio.com",
databaseURL : "https://vuejs-yjs-app-default-rtdb.europe-west1.firebasedatabase.app/"
}

firebase.initializeApp(firebaseConfig);
export default firebase.database();
