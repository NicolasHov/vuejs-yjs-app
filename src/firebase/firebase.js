import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //for help: https://jasonwatmore.com/post/2022/05/28/vue-3-vite-access-environment-variables-from-dotenv-env
  authDomain: 'vuejs-yjs-app.firebaseapp.com',
  projectId: 'vuejs-yjs-app',
  storageBucket: 'vuejs-yjs-app.appspot.com',
  messagingSenderId: '392077488694',
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_URL
}

firebase.initializeApp(firebaseConfig);
export default firebase.database();
