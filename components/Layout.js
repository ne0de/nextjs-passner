import Footer from "./Footer"
import Navbar from "./Navbar"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
