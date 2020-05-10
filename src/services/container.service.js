// Imports
import axios from "axios";
import authHeader from "../helpers/auth-header"

// add Bearer Token to HTTP Header
let config = {
    headers: authHeader()
}

// Export der Template Services 
export const containerService = {
    // Container Service (CRUD)
    // CREATE -> Deploy Container -> POST
    deployContainer(givenName, imageName, exposedPorts) {
        const url = '/api/endpoints/1/docker/containers/create';

        console.log("Name: " + givenName + " Image-Name: " + imageName+ " exposedPorts: " + exposedPorts)
        console.log(exposedPorts);
        const params = [
            {
                "name": givenName
            }
        ];
        
        const body = [
                {
                "Image": imageName,
                "ExposedPorts": {
                    exposedPorts
                },
                "HostConfig": {
                    "PortBindings": {
                        exposedPorts
                    }
                }
            }
        ]

        const test = [
            {
                "Image": "nginx:latest",
                "ExposedPorts": {
                    "80/tcp": { }
                },
                "HostConfig": {
                    "PortBindings": {
                        "80/tcp": [{ "HostPort": "" }]
                    }
                }
            }
        ]
        console.log(params);
        console.log(body);
        console.log(test);

        // return (axios.post(url, test, config));
    },
    // READ -> Show Template -> GET
    showTemplate(id) {
        const url = '/api/templates/' + id;
        return axios.get(url, config)
    },   
    // UPDATE -> Update Template -> PUT
    updateApp() {
        // ToDo
    },
    // DELETE -> Delete Template
    removeApp() {
        // ToDo
    },
    listContainerTemplates() {
        const url = "/api/templates";
        return(axios.get(url,config));
    },
    listPrivateApps() {
        // "1" ist noch nicht dynamisch -> evtl später zu ändern
        const url = "/api/endpoints/1/docker/containers/json";
        return(axios.get(url,config));
    }
}
export default containerService;