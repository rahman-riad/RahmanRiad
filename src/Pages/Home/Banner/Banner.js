import React from 'react';
import { Container } from 'react-bootstrap';
import Rahman from '../../../images/rahman.jpg';
import Typed from 'react-typed';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Container id="home">
                <div className="row px-2 py-4 align-items-center border border-light shadow-sm rounded mt-5 fullBannerContent">
                    <div className="col-md-5">
                        <div className="bannerImg" >
                            <img src={Rahman} className="img-fluid"
                                alt="Rahman Banner" />
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="bannerContent">
                            <h3 className="fw-bold fst-italic my-0">Hi, I'm</h3>
                            <h2 className="fw-bold fst-italic my-0">Mohammad Abdur Rahman Riad</h2>

                            <h4 className="fw-bold fst-italic my-0">I'm a
                                <span className="ms-2">
                                    <Typed
                                        strings={['MERN Stack Developer', 'Frontend Developer']}
                                        typeSpeed={45}
                                        backSpeed={50}
                                        loop
                                    />
                                </span>
                            </h4>
                            <p className="fst-italic my-2">To build my career as a Web Developer where I can represent my skills and prove myself as a quick learner
                                and also highly qualified professional so that I can help my community through my skills and specializations.
                                I always look for challenges where i can use my potential at most and always love to work on innovative
                                technologies.</p>
                        </div>

                        <div className="row gy-1 buttonPart">
                            <div className="col-md-6">
                                <a href="https://drive.google.com/file/d/1P9yQQX27f03mALWtukF-TR23ZERVJZZR/view"
                                    target="_blank"
                                    rel="noreferrer"
                                    class="w-100 btn btn-dark"
                                    role="button">DOWNLOAD RESUME</a>
                            </div>
                            <div className="col-md-6 border-start">
                                <a href="https://www.linkedin.com/in/rahmanriad/"
                                    target="_blank"
                                    rel="noreferrer"
                                    class="w-100 btn btn-dark"
                                    role="button">HIRE ME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Banner;
