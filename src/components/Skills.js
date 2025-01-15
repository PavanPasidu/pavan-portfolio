import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Technical Skills</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                            <Card className="h-100 shadow-sm">
                              <Card.Body>
                                <Card.Title className="text-center">Frontend Developer</Card.Title>
                                <ul className="list-unstyled">
                                  <li className="d-flex justify-content-between">
                                    <span>✔ HTML</span>
                                    <p>Basic</p>
                                  </li>
                                  <li className="d-flex justify-content-between">
                                    <span>✔ CSS</span>
                                    <p>Advanced</p>
                                  </li>
                                  <li className="d-flex justify-content-between">
                                    <span>✔ JavaScript</span>
                                    <p>Intermediate</p>
                                  </li>
                                  <li className="d-flex justify-content-between">
                                    <span>✔ Bootstrap</span>
                                    <p>Intermediate</p>
                                  </li>
                                  <li className="d-flex justify-content-between">
                                    <span>✔ Git</span>
                                    <p>Intermediate</p>
                                  </li>
                                  <li className="d-flex justify-content-between">
                                    <span>✔ React</span>
                                    <p>Intermediate</p>
                                  </li>
                                </ul>
                              </Card.Body>
                            </Card>


                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}