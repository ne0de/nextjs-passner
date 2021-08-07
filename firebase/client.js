import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHCiLu3rT9tqofmNgXnkj8808iPVfHULI",
  authDomain: "passner-90397.firebaseapp.com",
  projectId: "passner-90397",
  storageBucket: "passner-90397.appspot.com",
  messagingSenderId: "1091745171481",
  appId: "1:1091745171481:web:68609a0cc5f5e79de64288",
  measurementId: "G-J9JBBRPFMY",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuth = (user) => {
  const { email, photoURL } = user;
  console.log(user);
  return {
    avatar: photoURL,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user);
    onChange(normalizedUser);
  });
};

export const githubLogin = () => {
  return firebase.default
    .auth()
    .signInWithPopup(new firebase.auth.GithubAuthProvider());
};
