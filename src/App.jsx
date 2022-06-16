import React, { useState } from "react";
import { Header } from "@components/Header/";
import { Footer } from "@components/Footer/";
import { MainPage } from "./MainPage/";
import { News } from "./News/";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("mainPage");

  return (
    <>
      <Header onHeaderItemClick={setCurrentPage} />

      {currentPage === "mainPage" && <MainPage />}
      {currentPage === "news" && <News />}
      <Footer />
    </>
  );
};
