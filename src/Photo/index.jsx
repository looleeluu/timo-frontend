import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import axios from "axios";
import { photoData } from "./photoData";

const photoContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const photoCardStyle = {
  width: 356,
  marginBottom: 64,
};

const descriptionStyle = {
  fontSize: 20,
  lineHeight: 1.2,
};

export const Photo = () => {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/photos").then((res) => setPhotoData(res));
  }, []);

  return (
    <Container style={{ marginTop: 72 }}>
      <Row>
        <Col style={{ marginBottom: 72 }}>
          <h1>ФОТО</h1>
        </Col>
      </Row>
      <Row>
        <Col style={photoContainerStyle}>
          {photoData.map(({ image, description }) => (
            <div style={photoCardStyle} key={uuid4()}>
              <Image src={image} style={{ marginBottom: 16 }} />
              <p style={descriptionStyle}>{description}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
