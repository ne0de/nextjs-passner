import { useEffect } from "react"
import { useRouter } from "next/router"
import styles from "../styles/NotFound.module.scss"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 10000)
  }, [])

  return (
    <div className="container">
      <h1 className={styles.titleError}>Error 404</h1>
      <p className="description">La página que está buscando no existe.</p>
    </div>
  )
}

export default NotFound
