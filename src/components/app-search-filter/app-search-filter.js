// Liste mit Suchfiltern für Apps
// Suche nach App-Namen (Textinput) und Filter nach Kategorie (Dropdown)

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./app-search-filter.css";
// import { Form } from "semantic-ui-react";

function SearchAndFilterBar() {
    const [searchString, setSearchString] = useState('');
    const [category, setCategory] = useState('Choose...')

    const updateSearch = (e) => {
        setSearchString(e.target.value);
    }

    const updateCategory = (e) => {
        setCategory(e.target.value);
    }

    return (
        <Form id="app-search">
            <Form.Row>
                <Col>
                    <Form.Control placeholder="Suche" value={searchString} onChange={updateSearch}/>
                </Col>
                <Col>
                    <Form.Control as="select" value={category} onChange={updateCategory}>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Form>
    )
}


export default SearchAndFilterBar;