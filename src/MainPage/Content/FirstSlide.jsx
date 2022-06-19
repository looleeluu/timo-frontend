import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import image from "@assets/images/main__first_slide.png";

import "./index.scss";

export const FirstSlide = () => {
  return (
    <Row style={{ marginTop: 170 }}>
      <Col md={{ span: 7 }} className="d-flex">
        <Image className="w-100" src={image} />
      </Col>
      <Col md={{ span: 5 }}>
        <h1 className="h-padding">ПРОФЕССИИ БУДУЩЕГО</h1>
        <p className="main-text">
          Выпускники МКиМТ могут ориентироваться на широкий спектр профессий:
          телеведущий, радиоведущий, продюсер, редактор, дизайнер,
          бренд-менеджер, event-менеджер, арт-директор,IT-специалист и не
          только. Это могут быть как традиционная журналистика, так и аналитика,
          менеджмент, реклама, издательство книг на циф­ровых платформах, фирмы
          по производству компьютерных игр, анимации, а также программных
          продуктов и мо­бильных приложений.
        </p>
      </Col>
    </Row>
  );
};
