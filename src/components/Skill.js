import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';
// import { Skills } from "./Gallery";
import headerImg from "../assets/img/full-stack.png";
import headerImg3 from "../assets/img/ml.png";
import headerImg5 from "../assets/img/dev.png";
import 'react-multi-carousel/lib/styles.css';

import { useState } from 'react';

export const Skill = () => {
    const galleryItems = [
        headerImg,
        headerImg3,
        headerImg5,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const updateGallery = () => {
      // Circular slicing to get 3 items starting from currentIndex
      const visibleItems = [
          ...galleryItems.slice(currentIndex),
          ...galleryItems.slice(0, currentIndex),
      ].slice(0, 3); 

      return visibleItems.map((image, i) => (
          <img
              key={i}
              className={`gallery-item gallery-item-${i + 1}`}
              src={image}
              alt={`Gallery item ${i + 1}`}
              data-index={i + 1}
          />
      ));
    };

    const handleControlClick = (direction) => {
      if (direction === 'previous') {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
      } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
      }
    };

    return (
        <div className="gallery" id="skills">
          <Row>
            <Col xs={12} md={1}>
            <div className="gallery-controls">
                <button
                    className="gallery-controls-previous"
                    onClick={() => handleControlClick('previous')}
                >
                    <ArrowLeftCircle size={32} />
                </button>
            </div>
            </Col>

            <Col xs={12} md={10}>
            <h2>Skills</h2>
            <div className="gallery-container">
                {updateGallery()}
            </div>
            </Col>

            <Col xs={12} md={1}>
            <div className="gallery-controls">
                <button
                    className="gallery-controls-next"
                    onClick={() => handleControlClick('next')}
                >
                    <ArrowRightCircle size={32} />
                </button>
            </div>
            </Col>
          </Row>
        </div>
    );
};


