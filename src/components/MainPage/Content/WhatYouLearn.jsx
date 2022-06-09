import React from "react";
import { Row, Col } from "react-bootstrap";
import { Question } from "../../../../assets/icons/index.js";
import "bootstrap";

export const WhatYouLearn = () => {
  return (
    <Row style={{ marginTop: 250 }}>
      <Col md={{ offset: 1, span: 3 }}>
        <Question />
      </Col>
      <Col md={{ span: 1 }}>
        <div
          style={{ height: "100%", width: 3, backgroundColor: "white" }}
        ></div>
      </Col>
      <Col md={6}>
        <h1>ЧЕМУ ТЕБЯ НАУЧАТ?</h1>
        <p className="main-text">
          В процессе обучения будущих профессионалов в сфере мультимедиа
          факультет использует новейшие образовательные технологии. Практика
          студентов начинается с первого дня обучения – в деятельность
          факультета интегрированы региональные, городские и локальные-интернет
          проекты. Так, студенты факультета МКМТ могут реализовать себя как
          видеооператоры, видеоинженеры, звукорежиссеры, дизайнеры-верстальщики,
          журналисты, аниматоры, продюсеры, специалисты по рекламе и связям с
          общественностью.
        </p>
      </Col>
    </Row>
  );
};
