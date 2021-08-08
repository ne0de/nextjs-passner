import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDHCiLu3rT9tqofmNgXnkj8808iPVfHULI",
  authDomain: "passner-90397.firebaseapp.com",
  projectId: "passner-90397",
  storageBucket: "passner-90397.appspot.com",
  messagingSenderId: "1091745171481",
  appId: "1:1091745171481:web:68609a0cc5f5e79de64288",
  measurementId: "G-J9JBBRPFMY",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

//const database = firebase.firestore

const mapUserFromFirebaseAuth = (user) => {
  const { emailVerified, isAnonymous, providerData } = user
  providerData[0]["isAnonymous"] = isAnonymous
  providerData[0]["emailVerified"] = emailVerified
  return providerData[0]
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}

export const onUserSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Usuario deslogeado correctamente")
    })
    .catch((err) => {
      console.log(err)
    })
}
export const githubLogin = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
}
