import styles from "../styles/Table.module.scss"

const Table = () => {
  return (
    <div className={styles.container}>
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
  )
}

export default Table
