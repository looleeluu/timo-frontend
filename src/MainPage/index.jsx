import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "Components/Header/index.jsx";
import { Footer } from "Components/Footer/index.jsx";
import {
  Greetings,
  FirstSlide,
  SecondSlide,
  WhatYouLearn,
  Contacts,
  DeanOffice,
} from "./Content/index.js";
import "Assets/scss/index.scss";

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
