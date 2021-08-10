import Head from "next/head"

const Header = () => {
  return (
    <Head>
      <title>Passner</title>
      <meta
        name="description"
        content="Gestiona tus contraseñas de manera sencilla"
      />
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </Head>
  )
}

export default Header
