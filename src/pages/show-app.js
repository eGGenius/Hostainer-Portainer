import React, { useState, useEffect } from "react";
import containerService from "../services/container.service";
import { Container, Button } from "react-bootstrap";

function ShowAppPage(props) {
    const { match: { params } } = props;
    const [template, setTemplate] = useState([]);

    useEffect(() => {
        containerService.showTemplate(params.templateId).then(response => {
            setTemplate(response.data);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <Container className="site-content">
            <h1>{template.title}</h1>
            <p>{template.description}</p>
            <Button>Deploy</Button>
        </Container>
    )
}

export default ShowAppPage;
