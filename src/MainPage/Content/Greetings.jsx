import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MainLogo } from "@assets/icons/index.js";
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
          <Button style={{ marginTop: 88 }} size="lg">
            САЙТ УНИВЕРСИТЕТА
          </Button>
        </Col>
        <Col className="greetings-background">
          <MainLogo />
        </Col>
      </Row>
    </Container>
  );
};
