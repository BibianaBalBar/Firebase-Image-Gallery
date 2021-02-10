import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC1zn8hVxAJr3xhhS2INbSQ-UaKcwlfDDA",
  authDomain: "ideal-life-2e4dd.firebaseapp.com",
  projectId: "ideal-life-2e4dd",
  storageBucket: "ideal-life-2e4dd.appspot.com",
  messagingSenderId: "869348532043",
  appId: "1:869348532043:web:937aaaf79dac5f90efd2ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };