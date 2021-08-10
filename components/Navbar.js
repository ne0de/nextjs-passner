import Link from "next/link"
import useUser from "../hooks/useUser"
import { onUserSignOut } from "../firebase/client"
import { addUser } from "../firebase/client"

const Navbar = () => {
  const user = useUser()

  const handleSave = (e) => {
    console.log("hola")
    e.preventDefault()
    addUser(user)
  }

  return (
    <nav>
      <div className="menu">
        <Link href="/">
          <li>
            <a>Inicio</a>
          </li>
        </Link>
        <Link href="/download">
          <li>
            <a>Descargar</a>
          </li>
        </Link>
        <Link href="/contact">
          <li>
            <a>Contacto</a>
          </li>
        </Link>
        {user && (
          <>
            <Link href="/profile">
              <li>
                <a onClick={handleSave}>Guardar BD</a>
              </li>
            </Link>
            <Link href="/">
              <li>
                <a onClick={onUserSignOut}>Cerrar sesión</a>
              </li>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
