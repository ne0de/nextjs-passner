import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="title">Bienvenid@ a Passner!</h1>

        <p className="description">
          Te facilitamos el uso de tus contraseñas de la forma más segura en un
          depósito cifrado en línea
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Crear cuenta</h2>
          </a>

          <a className={styles.card}>
            <h2>Iniciar sesión</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
