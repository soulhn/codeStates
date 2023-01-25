import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // BrowerRouter를 index.js에 적용
  // <BrowserRouter>
  <App />,
  // </BrowserRouter>,
  document.getElementById("root")
);
