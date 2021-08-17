import Link from "next/link"
import useUser from "../hooks/useUser"
import { onUserSignOut } from "../firebase/client"
import { addUser } from "../firebase/client"
import styles from "../styles/Navbar.module.scss"
import { useState } from "react"

const Navbar = () => {
  const user = useUser()
  const [toggleMenu, setToggleMenu] = useState(true)

  const handleMenu = () => {
    const menu = document.getElementById("menu")
    toggleMenu ? (menu.style.width = "300px") : (menu.style.width = "0px")
    console.log("Hola")
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <div className={styles.hamburguer} onClick={handleMenu}>
        <span> &#9776; Abrir menu</span>
      </div>
      <div id="menu" className={styles.menu}>
        <header className={styles.menu__avatar}>
          {user ? (
            <>
              <img src={user.photoURL} alt={user.displayName} />
              <h2>{user.displayName ? user.displayName : "Desconocido"}</h2>
            </>
          ) : (
            <h1>Passner</h1>
          )}
        </header>
        <div className={styles.menu__links}>
          <a onClick={handleMenu}>Cerrar menu</a>
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
          {user && (
            <>
              <Link href="/panel">
                <a>Panel de control</a>
              </Link>
              <Link href="/configuration">
                <a>Configuración</a>
              </Link>
              <a onClick={onUserSignOut} href="#">
                Cerrar sesión
              </a>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
