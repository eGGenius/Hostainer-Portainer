import React, { useEffect, useState } from "react";
import Media from "react-bootstrap/Media";
import { Container } from "react-bootstrap";
import "./list-apps.css";

export default function ListApps() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const jwt = localStorage.getItem("jwt");

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + jwt);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/api/templates", requestOptions)
      .then(res => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
					setError(error);
        }
      );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        items.map(item => (
          <Media className="app-list-item" as="a" href={"/apps/" + item.Id} >
          {/* <Media className="app-list-item" as="Link" to={"/apps/" + item.Id} > */}
            <img
              width={64}
              height={64}
              className="align-self-center mr-3"
              src={item.logo}
              alt={item.title}
            />
            <Media.Body className="app-list-media-body">
              <Container fluid>
                {/* <Row> */}
                  {/* <Col sm={10}> */}
                    <h5>{item.title}</h5>
                    <p className="app-list-item-description">{item.description}</p>
                  {/* </Col> */}
                  {/* <Col sm={2}>
                    <ButtonGroup
                      vertical
                      size="sm"
                      aria-label="app-list-actions"
                      className="app-list-media-buttons"
                    >
                      <Button variant="primary" size="sm">
                        Show
                      </Button>
                      <Button variant="success" size="sm">
                        Get App
                      </Button>
                    </ButtonGroup>
                  </Col> */}
                {/* </Row> */}
              </Container>
            </Media.Body>
          </Media>
        ))
    );
  }
}
