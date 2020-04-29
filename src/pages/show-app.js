import React, { useState, useEffect } from "react";
import containerService from "../services/container.service";

function ShowAppPage(props) {
    const { match: { params } } = props;
    const [template, setTemplate] = useState([]);

    useEffect(() => {
        containerService.showContainer(params.templateId).then(response => {
            setTemplate(response.data);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <div className="site-content">
            <h1>{template.title}</h1>
            <p>{template.description}</p>
            <button>Deploy</button>
        </div>
    )
}

export default ShowAppPage;
