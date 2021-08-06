import Link from "next/link";

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
