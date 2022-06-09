import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MainLogo } from "../../../../assets/icons/index.js";
import "./index.scss";

export const Greetings = () => {
  return (
    <Container fluid style={{ marginTop: 108 }}>
      <Row>
        <Col
          md={{ offset: 1, span: 6 }}
          style={{
            paddingTop: 85,
          }}
        >
          <h1>МЕДИАКОММУНИКАЦИИ И МУЛЬТИМЕДИЙНЫЕ ТЕХНОЛОГИИ</h1>
          <p className="main-text">
            Наша цель – развивать новые рынки сквозных технологий и креативных
            индустрий через формирование ответственных, творческих, проактивных
            и готовых к постоянному саморазвитию профессионалов в
            медиакоммуникациях и мультимедийных технологиях.
          </p>
          <Button style={{ marginTop: 75 }} size="lg" className="purple-btn">
            САЙТ УНИВЕРСИТЕТА
          </Button>
        </Col>
        <Col md={{ offset: 1 }}>
          <MainLogo />
        </Col>
      </Row>
    </Container>
  );
};
