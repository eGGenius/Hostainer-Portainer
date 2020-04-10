// Leiste mit Suchfiltern für Apps
// Suche nach App-Namen (Textinput) und Filter nach Kategorie (Dropdown)

import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class SearchAndFilterBar extends Component {
  render() {
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Field label='Suche' control='input' />
                <Form.Field label='Kategorien' control='select'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Form.Field>
            </Form.Group>
        </Form>
    )
  }
}

export default SearchAndFilterBar;