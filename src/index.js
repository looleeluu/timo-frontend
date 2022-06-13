import React from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./MainPage/index.jsx";
import "@assets/scss/index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<MainPage />);
