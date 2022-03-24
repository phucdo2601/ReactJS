import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavbarScreen = () => {
  return (
    <>
      <div>
        <Navbar bg="danger" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React Toasters Demo</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarScreen;
