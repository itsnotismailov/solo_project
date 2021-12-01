import React from "react";
import { Carousel } from "react-bootstrap";

const Carousel1 = () => {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.7.lambic.ru/media/2552/1592392219.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="celebrity" style={{ fontSize: "30px" }}>
            {/* <h3>Ryan Joseph Giggs:</h3>
            <p>
              Ты должен сам ответственно готовиться к большому матчу, а уже
              после можешь не спать или не кушать правильно.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pokatim.ru/uploads/posts/2021-04/1619696594_f2db1e75e229051f25971ef01b97baed.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="celebrity" style={{ fontSize: "30px" }}>
            {/* <h3>LeBron James:</h3>
            <p>
              Нет никакого смысла приходить в NBA, если вы не верите, что можете
              выиграть здесь все.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://proprikol.ru/wp-content/uploads/2020/11/kartinki-piczcza-40.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption className="celebrity" style={{ fontSize: "30px" }}>
            {/* <h3>Conor McGregor:</h3>
            <p>Точность бьёт силу, тайминг бьёт скорость.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel1;
