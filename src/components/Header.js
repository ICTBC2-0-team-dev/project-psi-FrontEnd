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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
    AOS.init({ duration: 2000 });
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // open from service
  const [anchorElSer, setAnchorElSer] = React.useState(null);
  const openSer = Boolean(anchorElSer);
  const handleClickSer = (event) => {
    setAnchorElSer(event.currentTarget);
  };
  const handleCloseSer = () => {
    setAnchorElSer(null);
  };

  const handleGoToFreelance = () => {
    navigate("/freelancePage");
  };

  const handleGoToSpaceMarket = () => {
    navigate("/SpaceMarket");
  };
  const handleGoToConsulting = () => {
    navigate("/NotFound");
  };
  const handleGoToIndustri = () => {
    navigate("/NotFound");
  };
  const handleGoToactualite = () => {
    navigate("/actualite");
  };
  const handleGoToEvene = () => {
    navigate("/evenement");
  };
  return (
    <>
      <Container fluid className="bg-body-tertiary">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className="mx-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="underline">
                <Nav.Item>
                  <Nav.Link eventKey="HomeScreen" href="/">Acceuil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="SpaceMarket" href="/about">A propos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    aria-controls={openSer ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openSer ? 'true' : undefined}
                    onClick={handleClickSer}
                  >Service et solutions
                    {openSer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Nav.Link>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElSer}
                    open={openSer}
                    onClose={handleCloseSer}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem eventkey="freelance" onClick={handleGoToFreelance} sx={{ color: "primary" }}>Freelance</MenuItem>
                    <MenuItem eventKey="SpaceMarket"  onClick={handleGoToSpaceMarket}>spaceMarket</MenuItem>
                    <MenuItem eventKey="con"  onClick={handleGoToConsulting}>Consultant</MenuItem>
                    <MenuItem eventKey="con" onClick={handleGoToIndustri} >Industrialisation</MenuItem>
                  </Menu>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="ind"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >MEDIAS
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Nav.Link>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem  onClick={handleGoToactualite}>Actualites</MenuItem>
                    <MenuItem onClick={handleGoToEvene}>Evenement</MenuItem>
                  </Menu>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="Contact_us" href="/Contact_us">contact us</Nav.Link>
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
