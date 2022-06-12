import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Telegram,
  Pinterest,
  Vkontakte,
  TelephoneFill,
  MailFill,
} from "Assets/icons/index.js";
import "./index.scss";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row style={{ padding: "48px 0" }}>
          <Col>
            <h1>МКиМТ</h1>
          </Col>
          <Col md={{ span: 1 }}>
            <div
              style={{ height: "100%", width: 3, backgroundColor: "black" }}
            ></div>
          </Col>
          <Col md={{ span: 5 }}>
            <p className="footer-title">ИЩИ НАС В:</p>
            <div className="footer-contacts">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <Telegram />
                  <p>Официальный Telegram-канал МКиМТ</p>
                </div>
                <div className="d-flex">
                  <Vkontakte />
                  <p>Сообщество VK</p>
                </div>
                <div className="d-flex">
                  <Pinterest />
                  <p>Аккаунт МКиМТ | Pinterest</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <p className="footer-title">КОНТАКТНЫЕ ДАННЫЕ:</p>
            <div className="footer-contacts">
              <div className="d-flex ">
                <TelephoneFill />
                <p>238-13-49, 273-83-49</p>
              </div>
              <div className="d-flex">
                <MailFill />
                <p>spu-49@donstu.ru</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
