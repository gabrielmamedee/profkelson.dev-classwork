import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

const Layout = () => {
  return (
    <>
      <Menu />
        <div>
            <main>
                <Outlet /> {/* Aqui entra o conteúdo das páginas */}
            </main>
            <Footer />
        </div>
    </>
  );
};

export default Layout;