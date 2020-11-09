import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./style/globalStyle";

ReactDOM.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
