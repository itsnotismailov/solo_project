import React from "react";
import { Carousel } from "react-bootstrap";

const Carousel2 = () => {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.decathlonkz.com/modules/ps_imageslider/images/98648f4cdd024678941800bf3cf8d631ea54d3b8_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-21_11zon.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.decathlonkz.com/modules/ps_imageslider/images/e029c5d405b223aefda5c86d17a0b22df614a7c8_1112-_7_-_1_.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.decathlonkz.com/modules/ps_imageslider/images/ce2e1bf29e39a7c0baaac9f1232b7465e7ac6d65_1920%D1%85470_hiking_krg2-01%20(1)%20(1).webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel2;
