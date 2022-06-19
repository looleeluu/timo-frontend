import React, { useState } from "react";
import ReactCSStransitionGroup from "react-addons-css-transition-group";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { MainPage } from "./MainPage";
import { News } from "./News";
import { Photo } from "./Photo";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("mainPage");

  return (
    <>
      <Header onHeaderItemClick={setCurrentPage} currentPage={currentPage} />
      <ReactCSStransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {currentPage === "mainPage" && <MainPage />}
        {currentPage === "news" && <News />}
        {currentPage === "photo" && <Photo />}
      </ReactCSStransitionGroup>
      <Footer />
    </>
  );
};
