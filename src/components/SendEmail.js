import React from "react";
import TrackVisibility from 'react-on-screen';
import { Col, Container, Row } from "react-bootstrap";
import { EnvelopeAtFill, TelephoneOutboundFill } from 'react-bootstrap-icons';
import contactImg from "../assets/img/email-bg.jpg";

export const EmailLink = () => {
  return (
    <section className="contact" id="connect">
        <Container>
            <Row>
                <Col size={12} md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                        }
                    </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                    <Row>
                    <h2 style={{ fontSize: "60px", fontWeight: "bold", marginBottom: "0px", justifyContent: "center",alignItems: "center",textAlign: "center",}}>Contact Me</h2>
                    </Row>

                    <Row>
                    <div style={{ 
                        display: "flex",
                        textAlign: "center", 
                        flexDirection: "column",
                        marginTop: "40px" , 
                        justifyContent: "center",
                        alignItems: "flex-start",
                        paddingLeft: "28%",
                        height: "100%",}}>
                            <p style={{fontSize:"23px",fontFamily:"Roboto, sans-serif", display: "inline-flex",}}><EnvelopeAtFill size={30} style={{ marginRight: "15px" }}/>pavanpasidumh@gmail.com</p>
                            <p style={{fontSize:"23px",fontFamily:"Roboto, sans-serif", display: "inline-flex",}}><TelephoneOutboundFill size={30} style={{marginRight: "15px"}}/>+94 76 753 0377</p>
                    </div>
                    </Row>
                    
                    <Row>
                    <div style={{ 
                        display: "flex",
                        textAlign: "center", 
                        marginTop: "40px" , 
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",}}>
                        <a
                            href="mailto:pavanpasidumh@gmail.com?subject=Hello&body=I would like to connect with you!"
                            style={{
                            display: "inline-block",
                            padding: "15px 30px",
                            backgroundColor: "#007bff",
                            color: "#FFFFFF",
                            fontSize: "16px",
                            fontWeight: "bold",
                            textDecoration: "none",
                            border: "2px solid white",
                            borderRadius: "8px",
                            backgroundColor: "transparent",
                            transition: "background-color 0.3s, color 0.3s",
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#000033")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                        >
                        Email Me
                    </a>
                    </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

