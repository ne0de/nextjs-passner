import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

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

const mapUserFromFirebaseAuth = (user) => {
  const { emailVerified, isAnonymous, providerData } = user
  providerData[0]["isAnonymous"] = isAnonymous
  providerData[0]["emailVerified"] = emailVerified
  return providerData[0]
}

export const onAuthStateChanged = (onChange, setLoading) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    setLoading(false)
    onChange(normalizedUser)
  })
}

export const addPassword = ({ password, site, info, userId, email }) => {
  return firebase
    .firestore()
    .collection("passwords")
    .add({
      userId,
      email,
      password,
      site,
      info,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    })
}

export const getPasswords = (email) => {
  return firebase
    .firestore()
    .collection("passwords")
    .where("email", "==", email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data())
      })
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
  return firebase
    .auth()
    .signInWithRedirect(new firebase.auth.GithubAuthProvider())
}
