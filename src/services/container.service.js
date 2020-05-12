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
    deployContainer(givenName, imageName, ports) {
        const url = '/api/endpoints/1/docker/containers/create';

        let exposedPortsString = '{';
        let portBindingsString = '{'
        ports.forEach((port, i) => {
            exposedPortsString += '"' + port + '": {}';
            portBindingsString += '"' + port + '": [{"HostPort":""}]';
            if (i < ports.length - 1) {
                exposedPortsString += ',';
                portBindingsString += ',';
            }
        });
        exposedPortsString += '}'
        portBindingsString += '}'
        const exposedPortsJSON = JSON.parse(exposedPortsString);
        const portBindingsJSON = JSON.parse(portBindingsString);

        const params = {
            "name": givenName
        }
        const data = 
                {
                "Image": imageName,
                "ExposedPorts": exposedPortsJSON,
                "HostConfig": {
                    "PortBindings": portBindingsJSON
                }
            }
        let deployContainerConfig = config;
        deployContainerConfig.params = params;
        
        return axios.post(url, data, deployContainerConfig);
    },
    // Start a container
    startContainer(id) {
        const url = '/api/endpoints/1/docker/containers/' + id + '/start';
        const data = '';
        console.log("Versuche Container zu starten...");
        const startContainerConfig = {headers: authHeader()};
        axios.post(url, data, startContainerConfig)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
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
        const url = "/api/endpoints/1/docker/containers/json?all=true";
        return(axios.get(url,config));
    }
}
export default containerService;