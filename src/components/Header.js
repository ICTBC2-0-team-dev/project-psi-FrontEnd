import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logo from '../img/logopsi2.png';
import Form from 'react-bootstrap/Form';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();


  const handleLogin = () => {
    navigate('/account');
  };

  const handleSingUp = () => {
    navigate('/login');
  };

    React.useEffect(() => {
      AOS.init({duration:2000});
    }, []);
  return (
    <>
      <Container fluid className="bg-body-tertiary">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className="mx-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="underline">
                <Nav.Item>
                  <Nav.Link eventKey="HomeScreen" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventkey="/#" sx={{ color: "primary" }}>
                    Freelance
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="con">Consultant</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ind">Industrialisation</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      {/* Logo */}
      <Container fluid className="bg-white my-2">
        <Container>
          <Row>
            <Col xs={false} md={4}>
              <img src={Logo} alt="" style={{ height: "80px" }} />
            </Col>
            <Col xs={12} md={4} className="mt-3  justify-content-end ">
              <Form className="d-flex">
                {/* <Form.Control
                  type="search"
                  placeholder="Rechercher..."
                  className="me-2"
                  aria-label="Search"
                /> */}
              </Form>
            </Col>
            <Col xs={12} md={4} className="mt-3 justify-content-end ">
              <Button variant="outline-primary" onClick={handleLogin}>
                S’inscrire
              </Button>{" "}
              <Button variant="primary" onClick={handleSingUp}>
                Se Connecter
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Header;
