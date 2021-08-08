import styles from "../../styles/Form.module.scss"

import { useEffect } from "react"
import { useRouter } from "next/router"
import { githubLogin } from "../../firebase/client"

import useUser from "../../hooks/useUser"

const Login = () => {
  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    user && router.replace("/")
  }, [user])

  const handleClickGitHub = () => {
    githubLogin().catch((err) => {
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
          {user === undefined && <h1 className="title">Cargando..</h1>}
        </div>
      </form>
    </div>
  )
}

export default Login
