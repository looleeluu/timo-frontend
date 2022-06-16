import React from "react";
import { Container } from "react-bootstrap";
import {
  Greetings,
  FirstSlide,
  SecondSlide,
  WhatYouLearn,
  Contacts,
  DeanOffice,
} from "./Content";
import "@assets/scss/index.scss";

export const MainPage = () => {
  return (
    <>
      <Greetings />
      <Container>
        <FirstSlide />
        <SecondSlide />
        <WhatYouLearn />
        <Contacts />
        <DeanOffice />
      </Container>
    </>
  );
};
