import React, { useEffect, useState } from "react";
import Media from "react-bootstrap/Media";
import { Container } from "react-bootstrap";
import "./list-templates.css";
import containerService from "../../services/container.service";
import { useHistory } from "react-router-dom";

export default function ListAppTemplates() {
  const [items, setItems] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(null);
  const history = useHistory();

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    containerService.listContainerTemplates()
    .then(response => {
      setItems(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  return (
    items.map(item => (
        <Media key={item.Id} className="app-list-item" onClick={() => {history.push("/apps/" + item.Id)}}>
        <img
          width={64}
          height={64}
          className="align-self-center mr-3"
          src={item.logo}
          alt={item.title}
        />
        <Media.Body className="app-list-media-body">
          <Container fluid>
            <h5>{item.title}</h5>
            <p className="app-list-item-description">{item.description}</p>
          </Container>
        </Media.Body>
      </Media>
    ))
  );
}