import React from "react";
import { Row, Col } from "react-bootstrap";
import { StudyDirectionCard } from "../../StudyDirectionCard/index.jsx";
import {
  Tassel,
  Sun,
  CameraReels,
  Network,
  Microphone,
} from "../../../../assets/icons/index.js";

export const Contacts = () => {
  return (
    <>
      <Row style={{ marginTop: 380 }}>
        <Col md={{ offset: 1 }}>
          <h1>МКиМТ - ЭТО ТВОЙ ВЫБОР</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: 120 }}>
        <Col
          md={{ offset: 1, span: 10 }}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <StudyDirectionCard
            icon={<Tassel />}
            title="ДИЗАЙН"
            contacts="201-94-72, в будние дни с 8:30 до 17:00"
            email="spu-57.3@donstu.ru"
            address="344000 г.Ростов-на-Дону, ул. Социалистическая, 162. ауд. 24-506"
          />
          <StudyDirectionCard
            icon={<Sun />}
            title="ИСТОРИЯ И КУЛЬТОРОЛОГИЯ"
            contacts="273-83-28, в будние дни с 8:30 до 17:00"
            email="spu-49.1@donstu.ru"
            address="344000 г.Ростов-на-Дону, пл. Гагарина, 1., 162. ауд. 2-401, 2-402a"
          />
          <StudyDirectionCard
            icon={<CameraReels />}
            title="МЕДИАПРОИЗВОДСТВО"
            contacts="238-13-48, в будние дни с 8:30 до 17:00"
            email="spu-49.3@donstu.ru"
            address="344000 г.Ростов-на-Дону, пл. Гагарина, 1. ауд. 2-805в"
          />
          <StudyDirectionCard
            icon={<Network />}
            title="МЕДИАТЕХНОЛОГИИ"
            contacts="238-13-46, в будние дни с 8:30 до 17:00"
            email="spu-49.2@donstu.ru"
            address="344000 г.Ростов-на-Дону, пл. Гагарина, 1. ауд. 2-806б"
          />
          <StudyDirectionCard
            icon={<Microphone />}
            title="СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ"
            contacts="2738-417, в будние дни с 8:30 до 17:00"
            email="spu-49.4@donstu.ru"
            address="344000 г.Ростов-на-Дону, пл. Гагарина, 1. ауд. 2-408"
          />
        </Col>
      </Row>
    </>
  );
};
