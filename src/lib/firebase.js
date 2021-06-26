import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//importing seed file
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDwwmakdodWxWXeEZuLWyR5uo8gTO3iNZA",
  authDomain: "instagram-64742.firebaseapp.com",
  projectId: "instagram-64742",
  storageBucket: "instagram-64742.appspot.com",
  messagingSenderId: "591161252800",
  appId: "1:591161252800:web:c058cfb6a6bb468d50c625",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//Seeding the Data into firebase for only once
// seedDatabase(firebase);

export { firebase, FieldValue };
