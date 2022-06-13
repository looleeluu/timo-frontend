import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MiniLogo, HomeIcon, TelephoneIcon } from "@assets/icons/index.js";
import "./index.scss";

export const Header = () => {
  return (
    <header>
      <Container className="header">
        <Row>
          <Col md={{ span: 1 }}>
            <MiniLogo />
          </Col>
          <Col md={{ offset: 1, span: 5 }}>
            <Row
              style={{
                paddingTop: 38,
              }}
            >
              <Col>
                <div className="icon-block">
                  <HomeIcon />
                  <span style={{ paddingLeft: 7 }}>ГЛАВНАЯ</span>
                </div>
              </Col>
              <Col>
                <span className="ps-3">НОВОСТИ</span>
              </Col>
              <Col md={2}>
                <span>ФОТО</span>
              </Col>
              <Col>
                <span className="ps-3">ВИДЕО</span>
              </Col>
            </Row>
          </Col>
          <Col md={{ offset: 2, span: 3 }} style={{ paddingTop: "38px" }}>
            <div className="icon-block">
              <TelephoneIcon />
              <span style={{ paddingLeft: 7 }}>238-13-49, 273-83-49</span>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};