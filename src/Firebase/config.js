import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import 'firebase/compat/auth';// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDSJWv1pZZDj5MmMGYZrEg5dtO93R497Xs",
    authDomain: "olx-clone-91c4c.firebaseapp.com",
    projectId: "olx-clone-91c4c",
    storageBucket: "olx-clone-91c4c.appspot.com",
    messagingSenderId: "551497685027",
    appId: "1:551497685027:web:70c9310acd45b2aef2f996",
    measurementId: "G-LMF0KRDGZ1"
  };
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore(firebaseApp);
  export const storage = getStorage(firebaseApp)