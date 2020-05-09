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
    deployContainer(template, givenName) {
        // axios.post('/api//')
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