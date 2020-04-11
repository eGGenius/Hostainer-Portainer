import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  // NavLink
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import PrivateRouter from "./routes/private-routes";
import Container from "react-bootstrap/Container";
// import LoginPage from "./pages/login/login";
import LoginModal from "./pages/login/login-modal";
import Home from "./pages/home/home";
// import MainNavbar from "./components/main-navbar/main-navbar";


export default function App() {
  // LogIn Boolean zum Testen
  var isLoggedIn = true;

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Hostainer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* {isLoggedIn && ( */}
            <li className="nav-item">
              <Link className="nav-link" to="/topics">
                Topics2
              </Link>
            </li>
            {/* )} */}
          </Nav>
          {/* {isLoggedIn && (
            <React.Fragment> */}
          <Nav>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </Nav>
          {/* </React.Fragment>
          )} */}
          <Nav>
            <li className="nav-item">
              {isLoggedIn ? <LogOutButton /> : <LogInButton />}
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Switch>
          {isLoggedIn && (
            <React.Fragment>
              <PrivateRouter />
            </React.Fragment>
          )}
          <Route path="/login">
            <LoginModal />
          </Route>
          <Route exact path="/logout">
            <Home /> {/*To Do */}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/login"></Redirect>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function LogInButton() {
  // workaround: "to /a", sodass sich das Modal beim Klick auf Login öffnet 
  return (
    <Link className="nav-link" to="/a">
      Login
    </Link>
  );
}

function LogOutButton() {
  return (
    <Link className="nav-link" to="/logout">
      Logout (ToDo)
    </Link>
  );
}