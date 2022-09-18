import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCu0Hmra0TeFmjP-6-2tWXaT-Npo1KvxSQ",
    authDomain: "tsda-7f37d.firebaseapp.com",
    projectId: "tsda-7f37d",
    storageBucket: "tsda-7f37d.appspot.com",
    messagingSenderId: "597413229470",
    appId: "1:597413229470:web:4c364173b92d5944a19c8f"
  };

const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const storage = firebase.storage();

export { auth, storage }