import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";

export default function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Hostainer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              {/* <NavLink to="/" activeClassName="active"> */}
              Home
              {/* </NavLink> */}
            </Nav.Link>
            <Nav.Link href="/topics">
              {/* <NavLink to="/topics" activeClassName="active"> */}
              Topics
              {/* </NavLink> */}
            </Nav.Link>
            {/* <Nav.Dropdown title="Dropdown" id="collasible-nav-dropdown">
              <Nav.Dropdown.Item href="#action/3.1">Action</Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#action/3.2">
                Another action
              </Nav.Dropdown.Item>
              <Nav.Dropdown.Item href="#action/3.3">Something</Nav.Dropdown.Item>
              <Nav.Dropdown.Divider />
              <Nav.Dropdown.Item href="#action/3.4">
                Separated link
              </Nav.Dropdown.Item>
            </Nav.Dropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/about">
              {/* <NavLink to="/about" activeClassName="active"> */}
              About
              {/* </NavLink> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
