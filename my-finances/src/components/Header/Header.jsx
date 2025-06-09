import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
            <Navbar.Brand as={Link} to={'/'}>My-finances</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={'/'}>Dashboard</Nav.Link>
                <Nav.Link as={Link} to={'/lancamentos'}>Lançamentos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header