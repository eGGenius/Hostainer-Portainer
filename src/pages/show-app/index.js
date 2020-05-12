import React, { useState, useEffect } from "react";
import containerService from "../../services/container.service";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
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
                    <Col md={11}>
                        <h1>{template.title}</h1>
                    </Col>
                    <Col md={1}>
                        <Image src={template.logo} className="app-logo-thumb" thumbnail />
                    </Col>
                </Row>
                <Row className="show-template-properties">
                    <Col md={12}>
                        <Table responsive="md" borderless="true" size="md" className="show-template-properties-table">
                            <tbody>
                                <tr>
                                    <td><b>Beschreibung</b></td>
                                    <td>{template.description}</td>
                                </tr>
                                <tr>
                                    <td><b>Kategorie</b></td>
                                    <td>{template.categories}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h3>App installieren</h3>
                        <DeployContainerForm template={template}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ShowAppPage;