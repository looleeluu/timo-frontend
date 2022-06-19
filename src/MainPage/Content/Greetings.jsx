import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import mainPhoto from "@assets/images/main__logo.png";
import "./index.scss";

export const Greetings = () => {
  return (
    <Container style={{ marginTop: 72 }}>
      <Row>
        <Col>
          <h1 className="h-padding">
            МЕДИАКОММУНИКАЦИИ И МУЛЬТИМЕДИЙНЫЕ ТЕХНОЛОГИИ
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 7 }} style={{ paddingTop: 48 }}>
          <p className="main-text">
            Наша цель – развивать новые рынки сквозных технологий и креативных
            индустрий через формирование ответственных, творческих, проактивных
            и готовых к постоянному саморазвитию профессионалов в
            медиакоммуникациях и мультимедийных технологиях.
          </p>
          <Button
            className="main-button"
            size="lg"
            href="https://donstu.ru/structure/science-education/mediakommunikatsii-i-multimediynye-tekhnologii/"
          >
            САЙТ УНИВЕРСИТЕТА
          </Button>
        </Col>
        <Col className="greetings-background">
          <Image src={mainPhoto} />
        </Col>
      </Row>
    </Container>
  );
};
