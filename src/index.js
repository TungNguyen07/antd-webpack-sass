import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./css/styles.scss";
import { store } from "./configure-store";
import { Provider } from "react-redux";

import App from "./pages/Dashboard";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
