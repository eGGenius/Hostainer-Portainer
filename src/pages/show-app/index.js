import React, { useState, useEffect } from "react";
import containerService from "../../services/container.service";
import { Container, Row, Col, Image} from "react-bootstrap";
import DeployContainerForm from "./deploy-container-form";
import "./show-app.css";

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
            <Container fluid className="show-app-template-container">
                <Row className="show-template-heading">
                    <Col md="auto">
                        <Image src={template.logo} className="app-logo-thumb" thumbnail />
                    </Col>
                    <Col md="auto">
                        <Row><h1>{template.title}</h1></Row>
                        <Row><h3>{template.description}</h3></Row>
                    </Col>
                </Row>
                <Row className="deploy-container-form">
                    <Col md={12}>
                        <DeployContainerForm template={template}/>
                    </Col>
                </Row>
                <Row className="show-template-properties">
                    <Col>
                        <Row><h3>Kategorien</h3></Row>
                        <Row><p className="categorieItem">- {template.categories}</p></Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ShowAppPage;