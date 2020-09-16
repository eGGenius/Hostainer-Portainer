import React, { useState } from "react";
import containerService from "../../services/container.service";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function DeployContainerForm(props) {
    const [name, setName] = useState();
    const template = props.template;
    // const [isLoaded,setIsLoaded] = useState(false);
    const [isDeploying, setIsDeploying] = useState(false);
    const [isStarting, setIsStarting] = useState(false);
    const [error, setError] = useState(null)
    const history = useHistory();

    const handleSubmit = (e) => {
        containerService.deployContainer(name, template.image, template.ports)
            .then((response) => {
                setIsDeploying(true);
                // before starting, check if the container successfully deployed
                containerService.startContainer(response.data.Id)
                    .then((response) => {
                        console.log(response);
                        setIsStarting(true);
                        // check if status = "running", then redirect to my-apps & open container app in new tab
                    }).then(() => {
                        history.push('/my-apps');
                    })
                    .catch((error) => {
                        setError(error);
                    });
            })
            .catch((error) => {
                setError(error);
            });
        e.preventDefault();
    }

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (isStarting) {
        return <div>Container wird gestartet... (ToDo: Sie werden gleich weitergeleitet)</div>
    } else if (isDeploying) {
        return <div>Container wird installiert...</div>
    } else {
        return (
            <Form className="deploy-container-form" onSubmit={handleSubmit}>
                <Form.Row>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Legen Sie einen Namen für die Anwendung fest"
                            name="app-name"
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
}

