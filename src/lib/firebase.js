import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//importing seed file
import { seedDatabase } from "../seed";

// const config = {
//   apiKey: "AIzaSyDwwmakdodWxWXeEZuLWyR5uo8gTO3iNZA",
//   authDomain: "instagram-64742.firebaseapp.com",
//   projectId: "instagram-64742",
//   storageBucket: "instagram-64742.appspot.com",
//   messagingSenderId: "591161252800",
//   appId: "1:591161252800:web:c058cfb6a6bb468d50c625",
// };
const config = {
  apiKey: "AIzaSyCzWS4fHIcyAjf9FZ76WRhJ66sqrGnrz7o",
  authDomain: "instagram-136e5.firebaseapp.com",
  projectId: "instagram-136e5",
  storageBucket: "instagram-136e5.appspot.com",
  messagingSenderId: "492630398070",
  appId: "1:492630398070:web:97a1780b3b5c17f5c23b57",
  measurementId: "G-Q15NQ7M0L6",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//Seeding the Data into firebase for only once
// seedDatabase(firebase);

export { firebase, FieldValue };
