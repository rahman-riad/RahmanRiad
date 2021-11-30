import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Riad from '../../../images/riad.png';
// import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar className="shadow-sm" bg="white" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="d-flex align-items-center">
                            <div style={{ width: "45px" }}>
                                <img src={Riad}
                                    width="100%"
                                    style={{ borderRadius: "50%", border: "3px solid #ff014f" }}
                                    alt="Portfolio Logo" />
                            </div>
                            <h4 className="ms-2 mt-1 fw-bold" style={{ color: "#ff014f" }}>Rahman Riad</h4>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="fw-bold" style={{ color: "#ff014f" }} as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="fw-bold" style={{ color: "#ff014f" }} as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link className="fw-bold" style={{ color: "#ff014f" }} as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="fw-bold" style={{ color: "#ff014f" }} as={Link} to="/contact">Contact</Nav.Link>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;