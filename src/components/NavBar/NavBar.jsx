import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImagenLogo from '../../assets/img/logo.jpg'
import Stack from 'react-bootstrap/Stack';
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = function CollapsibleExample() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
      <Container className="navegation">
        <Navbar.Brand href="/">
          <img className='logo' src={ImagenLogo} alt="logo" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="manu me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <NavDropdown title="Productos" href="/productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/productos/frutas">Frutas</NavDropdown.Item>
              <NavDropdown.Item href="/productos/verduras">Verduras</NavDropdown.Item>
              <NavDropdown.Item href="/productos/huevos">Huevos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/carrito">
                Carrito de compras
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Contáctenos</Nav.Link>
          </Nav>
          <Nav>
          <Stack direction="horizontal" gap={3}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <div className="vr" />
          <CartWidget className="ms-5"/>
          </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>);
    
}


