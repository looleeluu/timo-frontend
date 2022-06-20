import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import services from "../Auth";
import { ErrorView } from "../components/ErrorView";

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
  const [loadingStatus, setLoadingStatus] = useState("resolved");

  const loadData = async () => {
    setLoadingStatus("pending");
    try {
      const res = await services.get("/photos/");
      setPhotoData(res.data);
      setLoadingStatus("resolved");
    } catch (e) {
      setLoadingStatus("rejected");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(loadingStatus);
  console.log(photoData);

  return (
    <Container style={{ marginTop: 72 }}>
      <Row>
        <Col style={{ marginBottom: 72 }}>
          <h1>ФОТО</h1>
        </Col>
      </Row>
      {loadingStatus === "rejected" && <ErrorView reload={loadData} />}
      {loadingStatus === "pending" && (
        <Spinner animation="grow" variant="light" />
      )}
      {loadingStatus === "resolved" && (
        <Row>
          <Col style={photoContainerStyle}>
            {photoData &&
              photoData.map(({ image, description }) => (
                <div style={photoCardStyle} key={uuid4()}>
                  <Image
                    src={image}
                    style={{ marginBottom: 16 }}
                    width={356}
                    height={238}
                  />
                  <p style={descriptionStyle}>{description}</p>
                </div>
              ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};
