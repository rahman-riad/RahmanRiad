import React from 'react';
import { Container } from 'react-bootstrap';
import './ProjectHome.css';
import GalaxyCraft from '../../../images/project/galaxycraft.PNG';
import PlanetParadise from '../../../images/project/planetparadise.PNG';
import PatroMedic from '../../../images/project/patromedic.PNG';
import BlendedLearning from '../../../images/project/blendedlearning.PNG';
import MusicBands from '../../../images/project/musicbands.PNG';
import ArchiveBook from '../../../images/project/archive.PNG';

const ProjectHome = () => {
    return (
        <>
            <Container className="my-5">
                <h2 className="fw-bold fst-italic mb-2 text-center text-success">My Projects</h2>

                {/* Row One */}
                <div className="row gy-3">
                    <div className="col-md-6">
                        <div className="projectDesign">
                            <img src={GalaxyCraft}
                                width="100%"
                                className="img-fluid border rounded-3 img-thumbnail"
                                alt="Project Banner" />
                            <h3 className="fw-bold fst-italic mt-2">GalaxyCraft</h3>
                            <p className="fst-italic" style={{ textAlign: "justify" }}>GalaxyCraft is an online car dealing platform where users will get both old and new cars. If user is logged in, he/she can easily order a product. Besides, there is also a dashboard where
                                users can cancel their order and also make a review. There is also another dashboard for Admin so that he/she can manage all orders and products.
                                Also, Admin can make a new Admin if needed.</p>

                            <a href="https://galaxycraft-riad.web.app/"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">LIVE PREVIEW</a>

                            <a href="https://github.com/rahman-riad/GalaxyCraft"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">CLIENT CODE</a>

                            <a href="https://github.com/rahman-riad/GalaxyCraft-Server"
                                target="_blank"
                                rel="noreferrer"
                                class="mb-2 btn btn-outline-dark"
                                role="button">SERVER CODE</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="projectDesign">
                            <img src={PlanetParadise}
                                width="100%"
                                className="img-fluid border rounded-3 img-thumbnail"
                                alt="Project Banner" />
                            <h3 className="fw-bold fst-italic  mt-2">Planet Paradise</h3>
                            <p className="fst-italic" style={{ textAlign: "justify" }}>Planet Paradise Provides Beautiful Tour Packages at reasonable price. Exclusive tour packages
                                from home and abroad are arranged by Planet Paradise. There is a option named My
                                Order where user can find all orders. User can also cancel the order from orders. There are more features where new packages can be added, all orders can be managed and also
                                the system of log out.</p>
                            <a href="https://planet-paradise.web.app/"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">LIVE PREVIEW</a>

                            <a href="https://github.com/rahman-riad/Planet-Paradise"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">CLIENT CODE</a>

                            <a href="https://github.com/rahman-riad/Planet-Paradise-Server"
                                target="_blank"
                                rel="noreferrer"
                                class="mb-2 btn btn-outline-dark"
                                role="button">SERVER CODE</a>
                        </div>
                    </div>
                </div>

                {/* Row Two */}
                <div className="row gy-3">
                    <div className="col-md-6">
                        <div className="projectDesign">
                            <img src={PatroMedic}
                                width="100%"
                                className="img-fluid border rounded-3 img-thumbnail"
                                alt="Project Banner" />
                            <h3 className="fw-bold fst-italic mt-2">PatroMedic</h3>
                            <p className="fst-italic" style={{ textAlign: "justify" }}>PatroMedic has specialized doctors, emergency supports for patients at any location. In this site user can register and login. Redirect system is applied in this site. If User is logged in to the site, he/she can find all our emergency supports. Now, PatroMedic is a
                                fully online services platform.</p>
                            <a href="https://patromedic.web.app/"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">LIVE PREVIEW</a>

                            <a href="https://github.com/rahman-riad/PatroMedic"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">CODE</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="projectDesign">
                            <img src={BlendedLearning}
                                width="100%"
                                className="img-fluid border rounded-3 img-thumbnail"
                                alt="Project Banner" />
                            <h3 className="fw-bold fst-italic mt-2">Blended Learning</h3>
                            <p className="fst-italic" style={{ textAlign: "justify" }}>Blended Learning Site Provide severall courses which are effective and easier. We Have Machine Learning, Data Mining, Problem Solving, Public Speaking etc Course. Blended Learning is not make for Specific course or technology. we will add different type of course.</p>
                            <a href="https://blendedlearning.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">LIVE PREVIEW</a>

                            <a href="https://github.com/rahman-riad/Blended-Learning"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">CODE</a>
                        </div>
                    </div>
                </div>

                {/* Row Three */}
                <div className="row gy-3">
                    <div className="col-md-6">
                        <div className="projectDesign">
                            <img src={MusicBands}
                                width="100%"
                                className="img-fluid border rounded-3 img-thumbnail"
                                alt="Project Banner" />
                            <h3 className="fw-bold fst-italic mt-2">Music Bands</h3>
                            <p className="fst-italic" style={{ textAlign: "justify" }}>DIU Foundation day is the biggestion function of Daffodil Internationl University. All Students, Teacher, Admins, Staff are enjoy this day together. In This Day DIU Arrange Concert and Invite Bangladeshi Music Band.</p>
                            <a href="https://invite-musicbands.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">LIVE PREVIEW</a>

                            <a href="https://github.com/rahman-riad/Music-Bands"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">CODE</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="projectDesign">
                            <img src={ArchiveBook}
                                width="100%"
                                className="img-fluid border rounded-3 img-thumbnail"
                                alt="Project Banner" />
                            <h3 className="fw-bold fst-italic mt-2">Archive Book</h3>
                            <p className="fst-italic" style={{ textAlign: "justify" }}>In Book archive you will get all of your favorite books. just visit book archive site and search your book and you will get exact or relative books of your search. </p>
                            <a href="https://archive-books.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">LIVE PREVIEW</a>

                            <a href="https://github.com/rahman-riad/Book-Archive"
                                target="_blank"
                                rel="noreferrer"
                                class="me-2 mb-2 btn btn-outline-dark"
                                role="button">CODE</a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ProjectHome;