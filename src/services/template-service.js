// Request App Templates for App Store

class templateService {

    getTemplates = (jwt) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTU4NjU5MDEzMX0.6bRsJxiKSNWyaEgb9JtFitj7Tfas8vq-mfxMeSCGW2k");
        // myHeaders.append("Authorization", "Bearer " + jwt);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://141.72.191.81:9000/api/templates", requestOptions)
            .then(res => res.json())
            // .then((result) => {
            //         setIsLoaded(true);
            //         setItems(result.items);
            //     },
            //     // Note: it's important to handle errors here
            //     // instead of a catch() block so that we don't swallow
            //     // exceptions from actual bugs in components.
            //     (error) => {
            //         setIsLoaded(true);
            //         setError(error);
            //     }
            // )
    }
}
