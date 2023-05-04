import firebase from 'firebase/app'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-gsYDhvCi3Fqvl7SXWpcKA8IAiIKqk44',
  authDomain: 'vuejs-yjs-app.firebaseapp.com',
  projectId: 'vuejs-yjs-app',
  storageBucket: 'vuejs-yjs-app.appspot.com',
  messagingSenderId: '392077488694',
  appId: '1:392077488694:web:b5a1b9caeed1a68d105e97',
//   databaseURL: "https://vuejs-yjs-app.firebaseio.com",
databaseURL : "https://vuejs-yjs-app-default-rtdb.europe-west1.firebasedatabase.app/"
}

firebase.initializeApp(firebaseConfig);
const db = firebase.getDatabase(firebaseApp);
export default db

// ####@

// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// // TODO: Add SDKs for Firebase products that you want to use

// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyD-gsYDhvCi3Fqvl7SXWpcKA8IAiIKqk44",
//   authDomain: "vuejs-yjs-app.firebaseapp.com",
//   databaseURL: "https://vuejs-yjs-app-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "vuejs-yjs-app",
//   storageBucket: "vuejs-yjs-app.appspot.com",
//   messagingSenderId: "392077488694",
//   appId: "1:392077488694:web:b5a1b9caeed1a68d105e97"
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// export default database


