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
import { Link } from "react-router-dom";

export const NavBar = function CollapsibleExample() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
      <Container className="navegation">
        <Navbar.Brand href="/">
          <img className='logo' src={ImagenLogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="NavBar me-auto">
            <Nav.Link ><Link className="linkTo" to="/">Home</Link></Nav.Link>
            <NavDropdown title="Productos" href="/productos" id="collasible-nav-dropdown">
              <NavDropdown.Item ><Link className="linkTo" to="/category/frutas">Frutas</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className="linkTo" to="/category/verduras">Verduras</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className="linkTo" to="/category/huevos">Huevos</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/carrito">
                Carrito de compras
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link className="linkTo" to="/contactenos">Contáctenos</Link></Nav.Link>
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


