import styles from "../../styles/Form.module.scss";

const Login = () => {
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
          <button className="smallBtn" type="button">
            Iniciar con Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
