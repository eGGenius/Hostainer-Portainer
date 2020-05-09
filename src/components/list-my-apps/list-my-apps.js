import React, { useState, useEffect } from "react";
import "./list-my-apps.css";
import { Table, Button } from "react-bootstrap";
import containerService from "../../services/container.service";
import { Link } from "react-router-dom";

export default function ListMyApps() {
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [error, setError] = useState(null);

    const [myApps, setMyApps] = useState([]);

    useEffect(() => {
        containerService.listPrivateApps().then(response => {
            setMyApps(response.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // }
    //  else {
    if (myApps.length !== 0) {
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
                        <tr>
                            <td>{sliceName(app.Names[0])}</td>
                            <td>{app.Image}</td>
                            {/* Starting, Running, Stopped */}
                            <td>{displayContainerState(app.State)}</td>
                            <td>
                                <ul>
                                    {app.Ports.map(port => (
                                        // ToDo: URL ändern
                                        <li><a href={"http://localhost:" + port.PublicPort}> {port.PublicPort}</a></li>
                                    ))}
                                </ul>
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
    // ToDo: Hover-Effekt der Buttons deaktivieren
    if (state === "starting") {
        // gelb
        return <Button className="display-state-button" disabled variant="warning">App startet...</Button>
    } else if (state === "running") {
        // grün
        return <Button className="display-state-button" disabled variant="success">App läuft</Button>
    } else if (state === "stopped") {
        // rot
        return <Button className="display-state-button" disabled variant="danger">App gestoppt</Button>
    }
}