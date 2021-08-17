import styles from "../styles/NotFound.module.scss"

const NotFound = () => {
  return (
    <div className="container">
      <h1 className={styles.titleError}>Error 404</h1>
      <p className="description">La página que está buscando no existe.</p>
    </div>
  )
}

export default NotFound
