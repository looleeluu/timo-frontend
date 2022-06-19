import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Telegram,
  Pinterest,
  Vkontakte,
  TelephoneFill,
  MailFill,
} from "@assets/icons";

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
                  <a href="https://t.me/s/mkmt_media">
                    Официальный Telegram-канал МКиМТ
                  </a>
                </div>
                <div className="d-flex">
                  <Vkontakte />
                  <a href="https://vk.com/mkmt.media">Сообщество VK</a>
                </div>
                <div className="d-flex">
                  <Pinterest />
                  <a href="https://www.pinterest.ru/mkmt_media/_created/">
                    Аккаунт МКиМТ | Pinterest
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <p className="footer-title">КОНТАКТНЫЕ ДАННЫЕ:</p>
            <div className="footer-contacts">
              <div className="d-flex ">
                <TelephoneFill />
                <a href="tel:238-13-49">238-13-49</a>,{" "}
                <a href="tel:273-83-49">273-83-49</a>
              </div>
              <div className="d-flex">
                <MailFill />
                <a href="mailto:spu-49@donstu.ru">spu-49@donstu.ru</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
