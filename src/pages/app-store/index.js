import React, { Component } from "react";
import SearchAndFilterBar from "../../components/app-search-filter/app-search-filter"
import ListAppTemplates from "./list-templates"
import { Container } from "react-bootstrap";

class AppStorePage extends Component {
  render() {
    return (
      <Container className="site-content">
        <SearchAndFilterBar />
        <ListAppTemplates />
      </Container>
    );
  }
}

export default AppStorePage;
