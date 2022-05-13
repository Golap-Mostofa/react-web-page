// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth}  from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:REACT_APP_apiKey,
//   authDomain:REACT_APP_authDomain,
//   projectId:REACT_APP_projectId,
//   storageBucket:REACT_APP_storageBucket,
//   messagingSenderId:REACT_APP_messagingSenderId,
//   appId:REACT_APP_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth}  from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// export default auth;

import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDz2DaamABsdi5HcoF-HHRripULlTZuFJ4",
  authDomain: "fir-project-add-emajone.firebaseapp.com",
  projectId: "fir-project-add-emajone",
  storageBucket: "fir-project-add-emajone.appspot.com",
  messagingSenderId: "221293120827",
  appId: "1:221293120827:web:00e01aeddc29e6ef1d3b1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;