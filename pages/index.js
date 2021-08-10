import Link from "next/link"
import styles from "../styles/Home.module.scss"
import useUser from "../hooks/useUser"

export default function Home() {
  const user = useUser()

  return (
    <div className="container">
      <main className="main">
        <div>
          <h1 className="title">Bienvenid@ a Passner!</h1>

          <p className="description">
            Te facilitamos el uso de tus contraseñas de la forma más segura en
            un depósito cifrado en línea
          </p>
        </div>

        <div className={styles.grid}>
          {user === undefined && (
            <a>
              <h2>Cargando..</h2>
            </a>
          )}
          {user === null && (
            <>
              <a className={styles.card}>
                <Link href="/register">
                  <h2>Crear cuenta</h2>
                </Link>
              </a>
              <a className={styles.card}>
                <Link href="/login">
                  <h2>Iniciar sesión</h2>
                </Link>
              </a>
            </>
          )}
        </div>
        {user && (
          <>
            <p className="description">
              Comienza a gestionar tus contraseñas yendo al panel de control.
            </p>
            <a className={styles.card}>
              <Link href="/dashboard">
                <h2>Panel de control</h2>
              </Link>
            </a>
          </>
        )}
      </main>
    </div>
  )
}
