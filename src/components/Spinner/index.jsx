import React from "react";
import { Row, Col, Spinner as BootstrapSpinner } from "react-bootstrap";

const spinnerContainerStyle = {
  height: "40vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Spinner = () => {
  return (
    <Row>
      <Col style={spinnerContainerStyle}>
        <BootstrapSpinner animation="grow" variant="light" />
      </Col>
    </Row>
  );
};
