import React, { useState, useEffect } from "react";
import "./list-my-apps.css";
import { Table, Button, Badge } from "react-bootstrap";
import containerService from "../../services/container.service";
import { Link } from "react-router-dom";

export default function ListMyApps() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [myApps, setMyApps] = useState([]);

    useEffect(() => {
        containerService.listPrivateApps()
        .then(response => {
            console.log(response.data);
            setMyApps(response.data);
            setIsLoaded(true);
        })
        .catch(error => {
            setError(error);
        }) ;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const getURL = (privatePort, publicPort) => {
        const url = window.location;
        const hostname = url.hostname;
        // ToDo: Protokoll abhängig vom "internen" Port machen -> z.B. Port 80: HTTP & Port 443 HTTPS
        const protocol = url.protocol;
        const hrefString = protocol + '//' + hostname + ':' + publicPort;
        return hrefString;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (myApps.length > 0) {
        return (
            <Table id="list-my-apps-table" striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>App</th>
                        <th>Status</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {myApps.map(app => (
                        <tr key={app.Id}>
                            <td>{sliceName(app.Names[0])}</td>
                            <td>{app.Image}</td>
                            {/* Starting, Running, Stopped */}
                            <td>{displayContainerState(app.State)}</td>
                            <td>
                                    {app.Ports.map(port => (
                                        // ToDo: URL ändern
                                        <Button key={port.PublicPort} size="sm" className="open-app-button" as="a" href={getURL(port.PrivatePort, port.PublicPort)} target="_blank" rel="noopener noreferrer">{port.PublicPort}</Button>
                                    ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    } else {
        return (
            <p>Sie haben noch keine Apps. Klicken sie <Link to="/apps">hier</Link>, um eine Anwendung zu installieren. </p>
        )
    }
}


// Entferne "\" vor dem Container Namen
const sliceName = (appName) => {
    const str = appName;
    const name = str.slice(1, str.length);
    return name;
}

const displayContainerState = (state) => {
    switch(state) {
        case "created":
            return <Badge variant="warning">App startet...</Badge>
        case "restarting":
            return <Badge>App startet...</Badge>
        case "running":
            return <Badge variant="success">App läuft</Badge>
        case "removing":
            return "";
        case "paused":
            return "";
        case "exited":
            return <Badge variant="danger">App gestoppt</Badge>
        case "dead":
            return "";
        default:
            return "";
    }
}