import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import { Row, Col, Container, ButtonGroup } from "react-bootstrap";
import "./list-apps.css";

export default function ListApps() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // fetch("https://api.example.com/items")
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setItems(result.items);
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
    // return (
    //   <ul>
    //     {items.map((item) => (
    //       <li key={item.name}>
    //         {item.name} {item.price}
    //       </li>
    //     ))}
    //   </ul>
    // );
//   }
    return sampleData.map((item) => (
      <Media className="app-list-item">
        <img
          width={64}
          height={64}
          className="align-self-center mr-3"
          src={item.logo}
          alt={item.title}
        />
        <Media.Body className="app-list-media-body">
          <Container fluid>
            <Row>
              <Col sm={10}>
                <h5>{item.title}</h5>
                <p className="app-list-item-description">{item.description}</p>
              </Col>
              <Col sm={2}>
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
              </Col>
            </Row>
          </Container>
        </Media.Body>
      </Media>
    ));

}

// function ListAppsAsCards() {
//     return(
//         <Card>
//           <Card.Img variant="top" src={item.logo}/>
//           <Card.Body>
//             <Card.Title>{item.title}</Card.Title>
//              <Card.Text>{item.description}</Card.Text>
//              <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//     )
// }

// export const getTemplateList = (body) => {
//     return fetch({
//         method: 'POST',
//         url: '$'
//     })
// }


const sampleData = [
  {
    Id: 1,
    type: 1,
    title: "Registry",
    description: "Docker image registry",
    administrator_only: false,
    image: "registry:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/registry.png",
    platform: "linux",
    categories: ["docker"],
    volumes: [
      {
        container: "/var/lib/registry",
      },
    ],
    ports: ["5000/tcp"],
  },
  {
    Id: 2,
    type: 1,
    title: "Nginx",
    description: "High performance web server",
    administrator_only: false,
    image: "nginx:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/nginx.png",
    platform: "linux",
    categories: ["webserver"],
    volumes: [
      {
        container: "/etc/nginx",
      },
      {
        container: "/usr/share/nginx/html",
      },
    ],
    ports: ["80/tcp", "443/tcp"],
  },
  {
    Id: 3,
    type: 1,
    title: "Httpd",
    description: "Open-source HTTP server",
    administrator_only: false,
    image: "httpd:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/httpd.png",
    platform: "linux",
    categories: ["webserver"],
    volumes: [
      {
        container: "/usr/local/apache2/htdocs/",
      },
    ],
    ports: ["80/tcp"],
  },
  {
    Id: 4,
    type: 1,
    title: "Caddy",
    description: "HTTP/2 web server with automatic HTTPS",
    administrator_only: false,
    image: "abiosoft/caddy:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/caddy.png",
    platform: "linux",
    categories: ["webserver"],
    volumes: [
      {
        container: "/root/.caddy",
      },
    ],
    ports: ["80/tcp", "443/tcp", "2015/tcp"],
  },
  {
    Id: 5,
    type: 1,
    title: "MySQL",
    description: "The most popular open-source database",
    administrator_only: false,
    image: "mysql:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/mysql.png",
    env: [
      {
        name: "MYSQL_ROOT_PASSWORD",
        label: "Root password",
      },
    ],
    platform: "linux",
    categories: ["database"],
    volumes: [
      {
        container: "/var/lib/mysql",
      },
    ],
    ports: ["3306/tcp"],
  },
  {
    Id: 6,
    type: 1,
    title: "MariaDB",
    description: "Performance beyond MySQL",
    administrator_only: false,
    image: "mariadb:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/mariadb.png",
    env: [
      {
        name: "MYSQL_ROOT_PASSWORD",
        label: "Root password",
      },
    ],
    platform: "linux",
    categories: ["database"],
    volumes: [
      {
        container: "/var/lib/mysql",
      },
    ],
    ports: ["3306/tcp"],
  },
  {
    Id: 7,
    type: 1,
    title: "PostgreSQL",
    description: "The most advanced open-source database",
    administrator_only: false,
    image: "postgres:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/postgres.png",
    env: [
      {
        name: "POSTGRES_USER",
        label: "Superuser",
      },
      {
        name: "POSTGRES_PASSWORD",
        label: "Superuser password",
      },
    ],
    platform: "linux",
    categories: ["database"],
    volumes: [
      {
        container: "/var/lib/postgresql/data",
      },
    ],
    ports: ["5432/tcp"],
  },
  {
    Id: 8,
    type: 1,
    title: "Mongo",
    description: "Open-source document-oriented database",
    administrator_only: false,
    image: "mongo:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/mongo.png",
    platform: "linux",
    categories: ["database"],
    volumes: [
      {
        container: "/data/db",
      },
    ],
    ports: ["27017/tcp"],
  },
  {
    Id: 9,
    type: 1,
    title: "CockroachDB",
    description:
      "An open-source, survivable, strongly consistent, scale-out SQL database",
    administrator_only: false,
    image: "cockroachdb/cockroach:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/cockroachdb.png",
    platform: "linux",
    categories: ["database"],
    command: "start --insecure",
    volumes: [
      {
        container: "/cockroach/cockroach-data",
      },
    ],
    ports: ["26257/tcp", "8080/tcp"],
  },
  {
    Id: 10,
    type: 1,
    title: "CrateDB",
    description: "An open-source distributed SQL database",
    administrator_only: false,
    image: "crate:latest",
    repository: {
      url: "",
      stackfile: "",
    },
    logo:
      "https://portainer-io-assets.sfo2.digitaloceanspaces.com/logos/cratedb.png",
    platform: "linux",
    categories: ["database"],
    volumes: [
      {
        container: "/data",
      },
    ],
    ports: ["4200/tcp", "4300/tcp"],
  },
];