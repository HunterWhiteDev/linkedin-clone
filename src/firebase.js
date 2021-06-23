import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnxgIFhyqrLdfVSZ4I4IG-_m1HQKsYA74",
  authDomain: "linkedin-3d6da.firebaseapp.com",
  projectId: "linkedin-3d6da",
  storageBucket: "linkedin-3d6da.appspot.com",
  messagingSenderId: "1032433619267",
  appId: "1:1032433619267:web:c15e25b91fcd2ee6621ff6",
  measurementId: "G-SKK7KGV38D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
