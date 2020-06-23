import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJdr0-jXUE4sg1UPe_WfL-3m7S-cefc6U",
  authDomain: "internal-intercom-app.firebaseapp.com",
  databaseURL: "https://internal-intercom-app.firebaseio.com",
  projectId: "internal-intercom-app",
  storageBucket: "internal-intercom-app.appspot.com",
  messagingSenderId: "748187601215",
  appId: "1:748187601215:web:fe332a08de893369e0ab8a",
  measurementId: "G-8XZMQH2QQX",
});

export default app;
