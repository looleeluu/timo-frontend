import React from "react";
import { Row, Col } from "react-bootstrap";

export const SecondSlide = () => (
  <>
    <Row style={{ marginTop: 280 }}>
      <Col>
        <h1>МЕДИА ЭТО ВАЖНО</h1>
      </Col>
    </Row>
    <Row style={{ marginTop: 72 }}>
      <Col>
        <p className="main-text">
          Сфера медиа стала неотлимой частью жизни общества. Средства массовой
          информации формируют наши вкусы, взгляды и интересы. Медиа-специалисты
          занимаются процессами использования медиа и влиянием медиа на людей и
          общество. Таким образом, став специалистом в области медиа, ваши
          навыки всегда будут востребованы как в масштабах малого бизнеса, так и
          в госудаственных структурах или транснациональных корпорациях.
        </p>
      </Col>
      <Col>
        <iframe
          src="https://vk.com/video_ext.php?oid=-43750853&id=456239255&hash=400b4dee2781deff"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen="1"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </Col>
    </Row>
  </>
);
