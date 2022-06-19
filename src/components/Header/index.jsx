import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MiniLogo, HomeIcon, TelephoneIcon } from "@assets/icons";

import "./index.scss";

export const Header = (props) => {
  const { currentPage, onHeaderItemClick } = props;
  const isActivePage = (page) => (page === currentPage ? "active" : "");

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
                <div
                  className={`icon-block header-title ${isActivePage(
                    "mainPage"
                  )}`}
                  onClick={() => onHeaderItemClick("mainPage")}
                >
                  <HomeIcon />
                  <span style={{ paddingLeft: 7 }}>ГЛАВНАЯ</span>
                </div>
              </Col>
              <Col>
                <div
                  className={`header-title ${isActivePage("news")}`}
                  onClick={() => onHeaderItemClick("news")}
                >
                  <span>НОВОСТИ</span>
                </div>
              </Col>
              <Col>
                <div
                  className={`header-title ${isActivePage("photo")}`}
                  onClick={() => onHeaderItemClick("photo")}
                >
                  <span>ФОТО</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={{ offset: 2, span: 3 }} style={{ paddingTop: "38px" }}>
            <div className="icon-block">
              <TelephoneIcon />
              <div style={{ paddingLeft: 7 }}>
                <a href="tel:238-13-49">238-13-49</a>
                {", "}
                <a href="tel:273-83-49">273-83-49</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
