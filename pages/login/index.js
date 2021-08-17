import styles from "../../styles/Form.module.scss"

import { useEffect } from "react"
import { useRouter } from "next/router"
import { facebookLogin, githubLogin } from "../../firebase/client"

import useUser from "../../hooks/useUser"

const Login = () => {
  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    user && router.replace("/")
    return
  }, [user])

  const handleClickFacebook = () => {
    facebookLogin().catch((err) => {
      console.log(err)
    })
  }
  const handleClickGitHub = () => {
    githubLogin().catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className={styles.containerForm}>
      {user === undefined && <h1 className="spinner"></h1>}
      {user === null && (
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
            <button className="smallBtn" type="submit" disabled>
              Iniciar sesión
            </button>
          </div>
          <div className={styles.formGroup}>
            <button
              className="smallBtn"
              type="button"
              onClick={handleClickGitHub}
            >
              Iniciar con Github
            </button>
            <div className={styles.formGroup}>
              <button
                className="smallBtnFacebook"
                type="button"
                onClick={handleClickFacebook}
              >
                Iniciar con Facebook
              </button>
            </div>
            <div className={styles.formGroup}>
              <p>
                Tenga en cuenta que solamente se accederá a los datos publicos
                de su cuenta para fines de desarrollo.
              </p>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default Login
