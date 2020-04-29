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
    showContainer(id) {
        const url = '/api/templates/' + id;
        return axios.get(url, config)
    },
    // UPDATE -> Update Template -> PUT
    updateContainer() {

    },
    // DELETE -> Delete Template
    removeContainer() {

    }
}
export default containerService;