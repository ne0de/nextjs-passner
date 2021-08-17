import styles from "../styles/Table.module.scss"

const Table = ({ id, site, createdAt, info }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <caption className={styles.caption}>Contraseña {id}</caption>
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
              {site}
            </td>
            <td className={styles.td} data-label="Creación">
              {createdAt}
            </td>
            <td className={styles.td} data-label="Información">
              {info}
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
