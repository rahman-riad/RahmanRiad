import React from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import './ContactForm.css';
import Connect from '../../../images/connect.png';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const sendEmail = (event) => {
        event.preventDefault();
        const success = emailjs.sendForm('service_545hblm', 'service_545hblm', event.target, 'user_ccETcKXEuD56hwak6mFK4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        if (success) {
            alert("Message Sent Successfully.")
        }
        event.target.reset();
    };

    return (
        <>
            <Container>
                <div className="contactForm">
                    <h3 className="fw-bold fst-italic text-center mb-4">Connect With Me</h3>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={Connect} className="img-fluid img-thumbnail" width="100%" alt="" />
                            {/* <h6 className="fw-bold mb-0 mt-2 fst-italic">Phone: +88 01684416051</h6>
                            <h6 className="fw-bold mb-0 fst-italic">Email: rahmanriad.cse@gmail.com</h6> */}

                            <div className="text-center">
                                <a href="https://www.linkedin.com/in/rahmanriad/"
                                    target="_blank"
                                    className="me-2 text-dark"
                                    style={{ fontSize: "28px" }}
                                    rel="noreferrer"><FaLinkedin /></a>

                                <a href="https://github.com/rahman-riad"
                                    target="_blank"
                                    className="me-2 text-dark"
                                    style={{ fontSize: "28px" }}
                                    rel="noreferrer"><FaGithubSquare /></a>

                                <a href="https://www.facebook.com/rrahman.riad"
                                    target="_blank"
                                    className="me-2 text-dark"
                                    style={{ fontSize: "28px" }}
                                    rel="noreferrer"><FaFacebookSquare /></a>

                                <a href="https://twitter.com/RiadRahman_?fbclid=IwAR3gPEowZN3Ld01NVoFKacGTtUfRAPZG2hmzPBRz0KzukxO1b1pHtuh5zsM"
                                    target="_blank"
                                    className="me-2 text-dark"
                                    style={{ fontSize: "28px" }}
                                    rel="noreferrer"><FaTwitterSquare /></a>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <Form onSubmit={sendEmail}>
                                <FloatingLabel
                                    controlId="floatingInputName"
                                    label="Name"
                                    className="mb-3"
                                >
                                    <Form.Control required type="text" name="name" placeholder="Name" />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control required type="email" placeholder="Email" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingTextarea2" label="Message">
                                    <Form.Control
                                        required
                                        as="textarea"
                                        name="message"
                                        placeholder="Leave a Message here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>

                                <Button className="w-100 mt-2" variant="dark" type="submit">
                                    <BiMailSend style={{ fontSize: "22px" }} /> SEND
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ContactForm;