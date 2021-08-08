import styles from "./style.module.css"

export default function Avatar({ alt, src }) {
  return (
    <>
      <img className={styles.avatar} alt={alt} src={src}></img>
    </>
  )
}
