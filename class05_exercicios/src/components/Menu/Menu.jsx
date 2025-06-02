import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo1.svg";
import ButtonDefault from '../ButtonDefault/ButtonDefault'

import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center" id={styles.menu}>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Inicial
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/sobre-nos">
              Sobre Nós
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/artigos">
              Artigos
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <Nav.Link as={Link} to='/contato'>
          <ButtonDefault texto={'Contato'}/>
        </Nav.Link>
      </div>
    </nav>
  );
};

export default Menu;
