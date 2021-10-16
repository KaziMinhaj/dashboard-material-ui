import React from "react";
import ReactDOM from "react-dom";
import App from "./components/PageOne/App";
// import AppTwo from "./components/pageTwo/AppTwo";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    {/* <AppTwo></AppTwo> */}
  </React.StrictMode>,
  document.getElementById("root")
);
