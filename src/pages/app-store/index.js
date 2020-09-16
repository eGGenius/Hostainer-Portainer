import React, { useState } from "react";
import ListAppTemplates from "./list-templates"
import { Container, Form, Col} from "react-bootstrap";

let searchFilter = "";
let searchCategory = "";
function AppStorePage() {
  const [searchString, setSearchString] = useState('');
  const [category, setCategory] = useState('Choose...')

  const updateSearch = (e) => {
    searchFilter = e.target.value;
    setSearchString(e.target.value);
  }

  const updateCategory = (e) => {
    searchCategory = e.target.value;
    setCategory(e.target.value);
  }
  return (
    <Container className="site-content">
      <Form id="app-search">
        <Form.Row>
          <Col>
            <Form.Control placeholder="Suche" value={searchString} onChange={updateSearch} />
          </Col>
          <Col>
            <Form.Control as="select" value={category} onChange={updateCategory}>
              <option value=''>Wähle eine Kategorie...</option>
              <option>webserver</option>
              <option>database</option>
              <option>storage</option>
              <option>messaging</option>
              <option>blog</option>
              <option>CMS</option>
              <option>Monitoring</option>
              <option>marketing</option>
              <option>filesystem</option>
              <option>backup</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form>
      <ListAppTemplates />
    </Container>
  );
}
export default AppStorePage;
export {searchFilter}
export {searchCategory}