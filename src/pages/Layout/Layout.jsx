import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="content">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
