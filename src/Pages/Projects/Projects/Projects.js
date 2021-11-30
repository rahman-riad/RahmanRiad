import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/projects.json")
            .then(response => response.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <>
            <Container className="my-5">
                <h3 className="text-center fw-bold fst-italic" style={{ color: "#ff014f" }}>Projects</h3>
                <div className="row">
                    {
                        projects.map(project => <SingleProject
                            key={project.key}
                            project={project}
                        />)
                    }
                </div>
            </Container>
        </>
    );
};

export default Projects;