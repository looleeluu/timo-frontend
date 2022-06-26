import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import { ErrorView, Spinner } from "@components";
import { useLoadData } from "@hooks/useLoadData";
import ImageViewer from "react-simple-image-viewer";

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
  const [loadingStatus, photos, reload] = useLoadData("/photos/");
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = (index) => () => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Container style={{ marginTop: 72 }}>
        <Row>
          <Col style={{ marginBottom: 72 }}>
            <h1>ФОТО</h1>
          </Col>
        </Row>
        {loadingStatus === "rejected" && <ErrorView reload={reload} />}
        {loadingStatus === "pending" && (
          <Spinner animation="grow" variant="light" />
        )}
        {loadingStatus === "resolved" && (
          <Row>
            <Col style={photoContainerStyle}>
              {photos &&
                photos.map(({ image, description }, index) => (
                  <div style={photoCardStyle} key={uuid4()}>
                    <Image
                      src={image}
                      style={{ marginBottom: 16, cursor: "pointer" }}
                      width={356}
                      height={238}
                      onClick={openImageViewer(index)}
                    />
                    <p style={descriptionStyle}>{description}</p>
                  </div>
                ))}
            </Col>
          </Row>
        )}
      </Container>

      {isViewerOpen && (
        <ImageViewer
          src={photos.map((data) => data.image)}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll
          backgroundStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
};
