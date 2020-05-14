import React, { useState } from "react";
import ListAppTemplates from "./list-templates"
import { Container, Form, Col} from "react-bootstrap";

export default function AppStorePage() {
  const [searchString, setSearchString] = useState('');
  const [category, setCategory] = useState('Choose...')

  const updateSearch = (e) => {
    setSearchString(e.target.value);
  }

  const updateCategory = (e) => {
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
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form>
      <ListAppTemplates />
    </Container>
  );
}
