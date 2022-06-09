import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../Header/index.jsx";
import { TeacherCard } from "../TeacherCard/index.jsx";
import {
  Greetings,
  FirstSlide,
  SecondSlide,
  WhatYouLearn,
  Contacts,
} from "./Content/index.js";
import "../../../assets/scss/index.scss";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Greetings />
      <Container fluid>
        <FirstSlide />
        <SecondSlide />
        <WhatYouLearn />
        <Contacts />
      </Container>
    </>
  );
};
