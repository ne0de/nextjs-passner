import styles from "../../styles/Form.module.scss"

import { onAuthStateChanged, githubLogin } from "../../firebase/client"
import { useEffect, useState } from "react"
import Avatar from "../../components/Avatar"

const Login = () => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClickGitHub = () => {
    githubLogin()
      .then(setUser)
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={styles.containerForm}>
      <form>
        <div className={styles.formHead}>
          <h1 className="description">Iniciar sesión</h1>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            name="username"
            className={styles.input}
            type="text"
            required
            autoComplete="name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña</label>
          <input
            className={styles.input}
            name="password"
            type="password"
            required
            autoComplete="password"
          />
        </div>
        <div className={styles.formGroup}>
          <button className="smallBtn" type="submit">
            Iniciar sesión
          </button>
        </div>
        <div className={styles.formGroup}>
          {user == null && (
            <button
              className="smallBtn"
              type="button"
              onClick={handleClickGitHub}
            >
              Iniciar con Github
            </button>
          )}
          {user && user.email && (
            <div>
              <Avatar src={user.photoURL} alt={user.email} />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
