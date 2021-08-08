//import router from "next/router"
import { useState, useEffect } from "react"
import { onAuthStateChanged } from "../firebase/client"

export default function useUser() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  /* if user state is not logged
  useEffect(() => {
    user === null && router.push("/")
  }, [user])
    */
  return user
}
