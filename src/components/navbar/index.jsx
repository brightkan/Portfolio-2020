import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './style.css'

function SiteNav() {
  const { pathname } = useLocation()
  return (
    <Navbar expand="md" className="site-navbar" fixed="top">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/home" className="navbar-brand-name">
          Bright Kanyange
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="site-nav" className="navbar-toggler-custom" />
        <Navbar.Collapse id="site-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" active={pathname === '/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" active={pathname === '/about'}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" active={pathname === '/projects'}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" active={pathname === '/contact'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default memo(SiteNav)
