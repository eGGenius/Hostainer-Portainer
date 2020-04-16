import React, { useState } from "react";
// import { Sidebar, Menu, Icon, Segment } from "semantic-ui-react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import RouterSwitch from "../../routes/routes";
import "./horizontal-nav-and-layout.css";

// Navigations-Sidebar und Container für die Seiteninhalte
// angezeigte Inhalte werden über Router gesteuert
export default function NavAndLayout() {
  const [activeItem, setActiveItem] = useState("meine apps");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "} */}
        <Navbar.Brand href="/">Hostainer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/my-apps">
                Meine Apps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apps">
                App Store
              </Link>
            </li>
          </Nav>
          <Nav>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid id="site-content">
        <RouterSwitch isLoggedIn={isLoggedIn} />
      </Container>
    </Router>
  );
}

