import styles from "../../styles/Panel.module.scss"
import form_styles from "../../styles/Form.module.scss"
import Table from "../../components/Table"

import useUser from "../../hooks/useUser"
import { addPassword, getPasswords } from "../../firebase/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Panel = () => {
  const user = useUser()
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [data, setData] = useState([])
  const [site, setSite] = useState("")
  const [info, setInfo] = useState("")

  useEffect(() => {
    let unsubscribe
    user === null && router.replace("/")
    if (user) {
      getPasswords(user.email, setData)
    }
  }, [user])

  const handleModal = (e) => {
    e.preventDefault()
    document.getElementById("modal").style.display = "block"
  }

  const closeFormModal = (e) => {
    e.preventDefault()
    document.getElementById("modal").style.display = "none"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let userId = user.uid
    let email = user.email
    addPassword({ site, password, info, userId, email })
      .then(() => {
        router.reload()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className={styles.container}>
      {user === undefined ? (
        <div className="spinner" />
      ) : (
        <>
          <div id="modal" className={styles.modal__form}>
            <div className={styles.modal__content}>
              <div className={form_styles.containerForm}>
                <form>
                  <div className={form_styles.formGroup}>
                    <label>¿De dónde proviene? (*)</label>
                    <input
                      onChange={(e) => setSite(e.target.value)}
                      className={form_styles.input}
                      type="text"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={form_styles.formGroup}>
                    <label>¿Cuál es la contraseña? (*)</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className={form_styles.input}
                      type="password"
                      required
                      autoComplete="password"
                    />
                  </div>
                  <div className={form_styles.formGroup}>
                    <label>Agrega información adicional (*)</label>
                    <textarea
                      onChange={(e) => setInfo(e.target.value)}
                      className={form_styles.input}
                      type="text"
                      cols="40"
                      rows="5"
                      required
                      autoComplete="text"
                    />
                  </div>
                  <div className={form_styles.formGroup}>
                    <button
                      className="smallBtn"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Agregar
                    </button>
                  </div>
                  <div className={form_styles.formGroup}>
                    <button className="smallBtn" onClick={closeFormModal}>
                      Cancelar
                    </button>
                  </div>
                  <p>
                    (*) Campo obligatorio
                    <br /> Esta contraseña se encriptará en nuestra base de
                    datos y será unicamente accesible por ti.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className={styles.group}>
            <h1 styles="title">Panel de control</h1>
            <p>
              Hola {!user.displayName ? "Desconocido" : user.displayName}, este
              es tu panel de control, aquí podras gestionar todas tus
              contraseñas.
            </p>
          </div>
          <div className={styles.group}>
            <button className="smallBtn" onClick={handleModal}>
              Agregar contraseña
            </button>
          </div>
          <div className={styles.group}>
            {data.map(({ id, site, info, createdAt }) => (
              <Table id={id} site={site} info={info} createdAt={createdAt} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Panel
