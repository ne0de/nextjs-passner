import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "./Head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
