import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "@components/Header/index.jsx";
import { Footer } from "@components/Footer/index.jsx";
import {
  Greetings,
  FirstSlide,
  SecondSlide,
  WhatYouLearn,
  Contacts,
  DeanOffice,
} from "./Content/index.js";
import "@assets/scss/index.scss";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Greetings />
      <Container>
        <FirstSlide />
        <SecondSlide />
        <WhatYouLearn />
        <Contacts />
        <DeanOffice />
      </Container>
      <Footer />
    </>
  );
};
