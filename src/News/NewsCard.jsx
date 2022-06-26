import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { ArrowRight } from "@assets/icons";

import "./index.scss";

export const NewsCard = ({ image, title, body, link, newsIndex, maxIndex }) => {
  return (
    <>
      <Row style={{ marginTop: 80, marginBottom: 80 }}>
        <Col md={5}>
          <Image width="100%" src={image} />
        </Col>
        <Col>
          <h1 style={{ marginBottom: 56 }}>{title}</h1>
          <p style={{ fontWeight: 400, fontSize: 28, marginBottom: 40 }}>
            {body}
          </p>
          <a className="news-link" href={link}>
            ПРОЧИТАТЬ НОВОСТЬ
            <ArrowRight />
          </a>
        </Col>
      </Row>
      {newsIndex !== maxIndex && (
        <Row>
          <Col>
            <hr
              style={{
                border: 0,
                borderTop: "3px solid rgba(255, 255, 255, 1)",
              }}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
