import styles from "../../styles/Panel.module.scss"
import useUser from "../../hooks/useUser"

const Panel = () => {
  const user = useUser()

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <h1 styles="title">Panel de control</h1>
        <p>
          Hola {}, este es tu panel de control, aquí podras gestionar todas tus
          contraseñas.
        </p>
      </div>
      <div className={styles.group}>
        <button className="smallBtn">Crear una nueva</button>
        <table className={styles.table}>
          <caption className={styles.caption}>Contraseñas</caption>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th} scope="col">
                Sitio
              </th>
              <th className={styles.th} scope="col">
                Creación
              </th>
              <th className={styles.th} scope="col">
                Información
              </th>
              <th className={styles.th} scope="col">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td className={styles.td} data-label="Sitio">
                Google.com
              </td>
              <td className={styles.td} data-label="Creación">
                hace 1 dia
              </td>
              <td className={styles.td} data-label="Información">
                mi super contra de manu
              </td>
              <td className={styles.td__actions} data-label="Acciones">
                <div className={styles.actions}>
                  <button className={styles.btn}>Mostrar</button>
                  <button className={styles.btn}>Editar</button>
                  <button className={styles.btn}>Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Panel
