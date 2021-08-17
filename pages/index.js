import Link from "next/link"
import styles from "../styles/Home.module.scss"
import useUser from "../hooks/useUser"

export default function Home() {
  const user = useUser()

  return (
    <div className="home__container">
      {user === undefined ? (
        <div className="spinner" />
      ) : (
        <>
          <div className="container__group">
            <h2 className="black__title">Bienvenid@ a Passner</h2>
            {user ? (
              <p className="black__description">
                Comienza a gestionar tus contraseñas yendo al panel de control o
                también puedes acceder al menu arriba a la izquierda
              </p>
            ) : (
              <p className="black__description">
                Te facilitamos el uso de tus contraseñas de la forma más segura
                en un depósito cifrado en línea
                <br />
              </p>
            )}
          </div>
          <div className={styles.home__buttons}>
            {user ? (
              <Link href="/panel">
                <a className={styles.btn}>Panel de control</a>
              </Link>
            ) : (
              <>
                <Link href="/register">
                  <a className={styles.btn}>Crear cuenta</a>
                </Link>
                <Link href="/login">
                  <a className={styles.btn}>Iniciar sesión</a>
                </Link>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
