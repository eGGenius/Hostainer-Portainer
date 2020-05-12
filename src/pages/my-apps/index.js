import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ListMyApps from "./list-my-apps";

class MyAppsPage extends Component {
  render() {
    return (
      <Container className="site-content">
        <ListMyApps />
      </Container>
    )
  }
}

export default MyAppsPage;
