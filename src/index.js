import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MainContext } from "./AppContext";

ReactDOM.render(
  <MainContext>
    <App />
  </MainContext>,
  document.getElementById("root")
);
