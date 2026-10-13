import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSchool } from 'react-icons/fa';

import { HeartIcon } from '@phosphor-icons/react';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <FaSchool /> <HeartIcon color="#AE2983" weight="fill" size={32} />{' '}
            Censo Escolar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="header-navbar" />
          <Navbar.Collapse id="header-navbar">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Instituições Ensino</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
