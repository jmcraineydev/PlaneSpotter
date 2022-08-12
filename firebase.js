// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// import {
//   REACT_APP_FB_APIKEY,
//   REACT_APP_FB_AUTHDOMAIN,
//   REACT_APP_FB_PROJECTID,
//   REACT_APP_FB_STORAGEBUCKET,
//   REACT_APP_FB_MESSAGESENDERID,
//   REACT_APP_FB_APPID,
// } from "@env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FB_APIKEY}`,
  authDomain: `${process.env.REACT_APP_FB_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_FB_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_FB_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FB_MESSAGESENDERID}`,
  appId: `${process.env.REACT_APP_FB_APPID}`,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
