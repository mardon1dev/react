import './home.css';
import Logo from './images/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarJs() {
  return (
    <Navbar bg="danger" expand="md" className='fixed-top'>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className="navbarjs-logo" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#menu" className='text-light'>Menu</Nav.Link>
            <Nav.Link href="#news" className='text-light'>News</Nav.Link>
            <Nav.Link href="#about" className='text-light'>About us</Nav.Link>
            <Nav.Link href="#contact" className='text-light'>Contact us</Nav.Link>
            <Nav.Link href="#login" className='text-light border border-light rounded-pill px-3 '>Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarJs;