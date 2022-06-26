import React from "react";
import { Alert, Button } from "react-bootstrap";

export const ErrorView = ({ reload }) => (
  <Alert key="dark" variant="dark" style={{ marginBottom: 72, marginTop: 72 }}>
    <Alert.Heading style={{ color: "black", marginBottom: 24 }}>
      НЕ УДАЛОСЬ ЗАГРУЗИТЬ ФОТОГРАФИИ
    </Alert.Heading>
    <p style={{ color: "black" }}>
      Произошла ошибка на сервере, попробуйсте позже
    </p>
    <Button onClick={reload} style={{ marginTop: 24 }}>
      ПОВТОРИТЬ
    </Button>
  </Alert>
);
