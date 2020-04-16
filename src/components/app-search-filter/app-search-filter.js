// Leiste mit Suchfiltern für Apps
// Suche nach App-Namen (Textinput) und Filter nach Kategorie (Dropdown)

import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./app-search-filter.css";
// import { Form } from "semantic-ui-react";

function SearchAndFilterBar() {
    return (
        <Form id="app-search">
            <Form.Row>
                <Col>
                    <Form.Control placeholder="Suche" />
                </Col>
                <Col>
                    <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Form>
        // <Form>
        //     <Form.Group widths='equal'>
        //         <Form.Field label='Suche' control='input' />
        //         <Form.Field label='Kategorien' control='select'>
        //             <option value='male'>Male</option>
        //             <option value='female'>Female</option>
        //         </Form.Field>
        //     </Form.Group>
        // </Form>
    )
}


export default SearchAndFilterBar;