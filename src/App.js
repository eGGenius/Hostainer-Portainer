import React from "react";
import NavBar from "./components/navbar/navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LoginPage from "./pages/login";
import AppStorePage from "./pages/app-store";
import MyAppsPage from "./pages/my-apps";
import ShowAppPage from "./pages/show-app";
import PageNotFoundPage from "./pages/pageNotFound";

import { authService } from "./services/authentication.service";

import './App.css';


export default function App() {
  return (
     <div id="app">
      <Router>
        <NavBar />
        <Switch>
          {/* Public Route */}
          <Route path="/login" component={LoginPage} />
          {/* Private Routes */}
          <PrivateRoute exact path="/apps" component = {AppStorePage} />
          <PrivateRoute path={"/apps/:templateId"} component={ShowAppPage} />
          <PrivateRoute exact path="/my-apps" component={MyAppsPage} />
          <PrivateRoute exact path="/" component={MyAppsPage}/>
          <PrivateRoute path="/" component={PageNotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authService.isLoggedIn() ? (<Component {...props} {...rest} />) : (<Redirect to={{
          pathname: "/login",
          state: { from: props.location }
        }} />)
      }
    />
  );
}