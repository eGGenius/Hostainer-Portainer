// Imports
import axios from "axios";
import authHeader from "../helpers/auth-header"



// Export der Template Services 
export const containerService = {
    // Container Service (CRUD)
    // CREATE -> Deploy Container -> POST
    deployContainer(givenName, imageName, ports) {
        const url = '/api/endpoints/1/docker/containers/create';
        // set params and data/body for the request
        const params = { "name": givenName }
        const data = {
            "Image": imageName,
            "ExposedPorts": getPortJSON(ports, 'exposedPorts'),
            "HostConfig": {
                "PortBindings": getPortJSON(ports, 'portBindings')
            }
        }
        let deployContainerConfig = getAuthConfig();
        deployContainerConfig.params = params;
        
        // post request
        return axios.post(url, data, deployContainerConfig);
    },
    // Start a container
    startContainer(id) {
        const url = '/api/endpoints/1/docker/containers/' + id + '/start';
        const config = getAuthConfig();
        return axios.post(url, {}, config)
    },
    stopContainer(id) {

    },
    deleteContainer(id) {
        const url = '/api/endpoints/1/docker/containers/' + id + '?force=true';
        const config = getAuthConfig();
        return axios.delete(url, config);
    },
    // READ -> Show Template -> GET
    showTemplate(id) {
        const url = '/api/templates/' + id;
        const config = getAuthConfig();
        return axios.get(url, config)
    },   
    listContainerTemplates() {
        const url = "/api/templates";
        const config = getAuthConfig();
        return(axios.get(url,config));
    },
    listPrivateApps() {
        // "1" ist noch nicht dynamisch -> evtl später zu ändern
        const url = "/api/endpoints/1/docker/containers/json?all=true";
        const config = getAuthConfig();
        return(axios.get(url,config));
    }
}
export default containerService;

const getPortJSON = (ports, type) => {
    let stringToAdd = '';
    let string = '{';
    if(type === 'exposedPorts') {
        stringToAdd = '{}'
    } else if (type === 'portBindings') {
        stringToAdd = '[{"HostPort":""}]'
    }
    ports.forEach((port, i) => {
        string += '"' + port + '": ' + stringToAdd;
        if (i < ports.length - 1) {
            string += ',';
        }
    });
    string += '}'
    const portsJSON = JSON.parse(string);
    return portsJSON;
}

// add Bearer Token to HTTP Header
const getAuthConfig = () => {
    let config = {
        headers: authHeader()
    }
    return config;
}
