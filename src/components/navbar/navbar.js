import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useHistory } from "react-router-dom";
import { authService } from "../../services/authentication.service";

// Navigations-Sidebar und Container für die Seiteninhalte
// angezeigte Inhalte werden über Router gesteuert
export default function NavBar() {
  let history = useHistory();
  return (
    authService.isLoggedIn() ? (
    <Navbar variant="dark" fixed="top" collapseOnSelect expand="md">
        <img id="nav-bar-img" src="../logo.png" alt="Logo" onClick={() => {history.push("/")}}/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <li className="nav-item">
            <Link id="nav-item-1" className="nav-link" to="/">
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
            <li className="nav-item"><p>Sie sind eingeloggt als <b>{localStorage.getItem("username")}</b></p></li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" onClick={() => {
              authService.logout();
            }}>
              Logout
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    ) : ("")
  );
}

