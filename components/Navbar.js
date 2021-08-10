import Link from "next/link"
import useUser from "../hooks/useUser"
import { onUserSignOut } from "../firebase/client"
import { addUser } from "../firebase/client"
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  const user = useUser()

  const handleSave = (e) => {
    e.preventDefault()
    addUser(user)
  }
  console.log(user)

  return (
    <nav className={styles.menu}>
      <div className={styles.menu__toggle} />
      {user === undefined ? (
        <div className="spinner" />
      ) : (
        <>
          <header className={styles.menu__avatar}>
            {user ? (
              <>
                <img src={user.photoURL} alt={user.displayName} />
                <h2>{user.displayName}</h2>
              </>
            ) : (
              <h1>Passner</h1>
            )}
          </header>
          <ul className={styles.menu__navigation}>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            {user && (
              <>
                <li>
                  <a>Configuración</a>
                </li>
                <li>
                  <a>Cerrar sesión</a>
                </li>
              </>
            )}
          </ul>
        </>
      )}
    </nav>
  )
}

export default Navbar
