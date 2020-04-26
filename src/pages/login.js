import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { authService } from "../services/authentication.service";

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
      <Container>
        <form onSubmit={(e) => {
          login(e);
        }}>
          <label>username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button block type="submit">Login</Button>
        </form>
      </Container>
    )
  );
}


