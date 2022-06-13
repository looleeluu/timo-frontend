import React from "react";
import { v4 as uuid4 } from "uuid";
import { Row, Col } from "react-bootstrap";
import { StudyDirectionCard } from "@components/StudyDirectionCard/index.jsx";
import { contactsData } from "./cardsData.js";

export const Contacts = () => {
  return (
    <>
      <Row style={{ marginTop: 380 }}>
        <Col>
          <h1>МКиМТ - ЭТО ТВОЙ ВЫБОР</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: 112 }}>
        <Col className="d-flex">
          {contactsData.map((contact) => (
            <StudyDirectionCard key={uuid4()} {...contact} />
          ))}
        </Col>
      </Row>
    </>
  );
};
