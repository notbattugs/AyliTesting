import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/BetterLogo.png';

function Savbar() {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('role')) === 'owner') {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, []);
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="white"
          expand={expand}
          className="mb-3"
          fixed="top"
        >
          <Container fluid style={{ marginLeft: '40px' }}>
            <Navbar.Brand href="/">
              <img
                style={{ height: '110px', width: '110px' }}
                src={Logo}
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ width: 'auto', height: '500px' }}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <hr />
                  <Nav.Link href="/">Home</Nav.Link>
                  <hr />
                  <Nav.Link href={display ? '/ownerprofile' : '/profile'}>
                    Profile
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="/signin">Signin</Nav.Link>
                  <hr />
                  <Nav.Link href="/signup">Signup</Nav.Link>
                  <hr />
                  <Nav.Link href="/notifications">Notification</Nav.Link>
                  <hr />
                  <Nav.Link href="/map">Map</Nav.Link>
                  <hr />
                  <Nav.Link href="/orders">Orders</Nav.Link>
                  <hr />
                  <Nav.Link
                    href="/signin"
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Signout
                  </Nav.Link>
                </Nav>
                <hr />
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Locations"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Savbar;
