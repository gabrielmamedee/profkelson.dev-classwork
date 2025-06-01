import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav className='justify-content-center mb-4 mt-4'>
        <Nav.Item>
            <Nav.Link as={Link} to='/'>Inicial</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to='/sobre-nos'>Sobre Nós</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to='/artigos'>Artigos</Nav.Link>
        </Nav.Item>
    </Nav>
  )
}

export default Navbar