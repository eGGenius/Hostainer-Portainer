import React, { useState } from "react";
import containerService from "../services/container.service";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function DeployContainerForm(props) {
    const [name, setName] = useState();
    const template = props.template;
    
    const handleSubmit = (e) => {
        containerService.deployContainer(name, template.image, template.ports);
        e.preventDefault();
    }

    return (
        <Form className="deploy-container-form" onSubmit={handleSubmit}>
            <Form.Row>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="Legen Sie einene Namen für die Anwendung fest"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        required
                    />
                </InputGroup>
            </Form.Row>
            <Button type="submit" value="Submit">Installieren</Button>
        </Form>
    )
}

