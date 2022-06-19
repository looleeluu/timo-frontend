import React from "react";
import { v4 as uuid4 } from "uuid";
import { Row, Col } from "react-bootstrap";
import { StudyDirectionCard } from "@components/StudyDirectionCard";
import { contactsData } from "./cardsData";

import "./index.scss";

export const Contacts = () => {
  return (
    <>
      <Row style={{ marginTop: 380 }}>
        <Col>
          <h1>
            <span className="purple-h">МКиМТ</span> - ЭТО ТВОЙ ВЫБОР
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: 88 }}>
        <Col className="d-flex">
          {contactsData.map((contact) => (
            <StudyDirectionCard key={uuid4()} {...contact} />
          ))}
        </Col>
      </Row>
    </>
  );
};
