import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEM7fa1Erl2NLpM8VTRYcvYHw-cl-JEjw",
  authDomain: "sociosxit-fa932.firebaseapp.com",
  databaseURL: "https://sociosxit-fa932-default-rtdb.firebaseio.com",
  projectId: "sociosxit-fa932",
  storageBucket: "sociosxit-fa932.firebasestorage.app",
  messagingSenderId: "942961938934",
  appId: "1:942961938934:web:8f9e5620253d122a9e77d7"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export { firebaseConfig };
