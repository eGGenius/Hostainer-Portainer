import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "../pages/login";
import AppStorePage from "../pages/app-store";
import MyAppsPage from "../pages/my-apps";
import ShowAppPage from "../pages/show-app.js";
import "./nav-and-layout.css";
import { 
  useHistory, 
  // useLocation 
} from "react-router-dom";
import { authService } from "../services/authentication.service";

// Navigations-Sidebar und Container für die Seiteninhalte
// angezeigte Inhalte werden über Router gesteuert
export default function NavAndLayout() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/my-apps">
            <MyAppsPage />
          </PrivateRoute>
          <PrivateRoute exact path="/apps">
            <AppStorePage />
          </PrivateRoute>
          <Route path={"/apps/:templateId"} component={ShowAppPage} />
          {/* Public Route */}
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute exact path="/">
            <Redirect to="/my-apps" />
          </PrivateRoute>
          <PrivateRoute path="/">
            {/* ToDo: Page Not Found */}
            <Redirect to="/" />
          </PrivateRoute>
          {/* <PrivateRoute
              path="/"
              component={PageNotFound}
            /> */}
        </Switch>
      </div>
    </Router>
  );
}

const NavBar = () => {
  let history = useHistory();
  return (
    authService.isLoggedIn() ? (
    <Navbar id="navbar" collapseOnSelect expand="md">
      {/* <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "} */}
      <Navbar.Brand><img id="nav-bar-img" src="../logo.png"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <li className="nav-item">
            <Link id="nav-item-1" className="nav-link" to="/my-apps">
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
            <Link className="nav-link" to="/" onClick={() => {
              authService.logout(() => history.push("/"));
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

function PrivateRoute({ children, ...rest}) {
  return (
      <Route
        {...rest}
        render={({ location }) =>
        authService.isLoggedIn() ? (children) : (<Redirect to={{
          pathname: "/login",
          state: { from: location }
        }} />)
        }
      />
  );
}

// Subrouter
// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }