import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import './Details.css';

const Details = () => {
    const { key } = useParams();
    const [singleProjectDetails, setSingleProjectDetails] = useState([]);
    useEffect(() => {
        fetch(`/projects.json`)
            .then(res => res.json())
            .then(data => setSingleProjectDetails(data));
    }, []);


    const singleProject = singleProjectDetails.find((project) => project.key === key);

    return (
        <>
            <Container>
                <div className="singleDetailsDesign">
                    <h3 className="fw-bold fst-italic text-center">{singleProject?.name}</h3>
                    <div className="row g-2">
                        <div className="col-md-8">
                            <img src={singleProject?.mainImg}
                                width="100%"
                                className="img-fluid border border-dark rounded-3 img-thumbnail"
                                alt="Project Banner" />
                        </div>
                        <div className="col-md-4">
                            <img src={singleProject?.imgOne}
                                width="100%"
                                className="img-fluid mb-2 border border-dark rounded-3 img-thumbnail"
                                alt="Project Banner" />
                            <img src={singleProject?.imgTwo}
                                width="100%"
                                className="img-fluid border border-dark rounded-3 img-thumbnail"
                                alt="Project Banner" />
                        </div>
                    </div>

                    <div className="d-flex flex-wrap my-2">
                        {singleProject?.technology.map(tech => <p
                            style={{ padding: "2px 8px" }}
                            className="bg-success text-white m-1 rounded">{tech}</p>)}
                    </div>

                    <p className="fst-italic" style={{ textAlign: "justify" }}>{singleProject?.description}</p>

                    <div className="mt-2 mb-3">
                        {singleProject?.bulletPoint.map(bullet => <li
                            className="ms-3">{bullet}</li>)}
                    </div>


                    <a href={singleProject?.livePreview}
                        target="_blank"
                        rel="noreferrer"
                        class="mb-2 me-2 btn btn-outline-dark"
                        role="button">LIVE PREVIEW</a>

                    <a href={singleProject?.code}
                        target="_blank"
                        rel="noreferrer"
                        class="mb-2 me-2 btn btn-outline-dark"
                        role="button">CODE</a>

                    {singleProject?.codeServer && <a href={singleProject?.codeServer}
                        target="_blank"
                        rel="noreferrer"
                        class="mb-2 me-2 btn btn-outline-dark"
                        role="button">SERVER CODE</a>}

                </div>

                <div className="text-center my-5">
                    <Link to="/">
                        <button className="btn btn-dark">Go to Home</button>
                    </Link>
                </div>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default Details;