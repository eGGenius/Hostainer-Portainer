import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { authService } from "../services/authentication.service";
import "./login.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  let login = (e) => {
    authService.login(e, username, password, () => {
      history.replace(from);
    });
  }

  return (
    authService.isLoggedIn() ? 
    (<Redirect to={from} /> ) 
    : 
    ( 
      <div id="auth-page">
        <div id="auth-wrapper">
          <div id="auth-inner">
            <img id="auth-inner-logo" src="logo.png" alt="Logo"></img>
            <Form onSubmit={(e) => {
              login(e);
            }}>
          {/* <form onSubmit={(e) => {
            login(e);
          }}> */}
            <Form.Group>
              <Form.Control
                placeholder="Benutzername"
                type="text"
                name="username"
                size="sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group>
              <Form.Control
                placeholder="Passwort"
                type="password"
                name="password"
                size="sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                </Form.Group>  
              <Button size="sm" block type="submit">Login</Button>
            
          {/* </form> */}
          </Form>
          </div>
        </div>
      </div>
    )
  );
}


