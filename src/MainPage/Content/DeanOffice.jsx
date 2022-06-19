import React from "react";
import { Row, Col } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import { deanOffice } from "./cardsData";
import { EmployeeCard } from "@components/EmployeeCard";

export const DeanOffice = () => {
  return (
    <>
      <Row style={{ marginTop: 240 }}>
        <Col style={{ marginBottom: 88 }}>
          <h1>ДЕКАНАТ</h1>
        </Col>
      </Row>
      <Row style={{ marginBottom: 80 }}>
        <Col className="d-flex flex-wrap justify-content-between">
          {deanOffice.map((member) => (
            <EmployeeCard key={uuid4()} {...member} />
          ))}
        </Col>
      </Row>
    </>
  );
};
