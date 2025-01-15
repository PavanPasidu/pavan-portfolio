import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import Slider from "react-slick";

export const Skill = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of cards to show at a time
    slidesToScroll: 1, // Number of cards to scroll per click
    autoplay: true, // Automatically slide
    autoplaySpeed: 3000, // Time between slides (ms)
    };

  return (
    <div className="three-d-container">
        <Slider {...settings}>
        <div>
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
        </div>

        <div>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center">Backend Developer</Card.Title>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between">
                  <span>✔ PHP</span>
                  <p>Intermediate</p>
                </li>
                <li className="d-flex justify-content-between">
                  <span>✔ Node.js</span>
                  <p>Basic</p>
                </li>
                <li className="d-flex justify-content-between">
                  <span>✔ Python</span>
                  <p>Intermediate</p>
                </li>
                <li className="d-flex justify-content-between">
                  <span>✔ MySQL</span>
                  <p>Intermediate</p>
                </li>
                <li className="d-flex justify-content-between">
                  <span>✔ Firebase</span>
                  <p>Intermediate</p>
                </li>
                <li className="d-flex justify-content-between">
                  <span>✔ SQL</span>
                  <p>Intermediate</p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>

        <div>
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
        </div>
        </Slider>
    </div>
  );
};

