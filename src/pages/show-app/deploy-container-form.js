import React, { useState } from "react";
import containerService from "../../services/container.service";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function DeployContainerForm(props) {
    const [name, setName] = useState();
    const template = props.template;
    
    const handleSubmit = (e) => {
        containerService.deployContainer(name, template.image, template.ports)
        .then((response) => {
                    console.log(response);
                    containerService.startContainer(response.data.Id);
                })
        .catch((error) => {
            console.log(error);
        });
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
            <Form.Row>
                <Button block type="submit">Installieren</Button>
            </Form.Row>
        </Form>
    )
}

