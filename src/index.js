import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reduxStore from "./Store/Store";
import { Provider } from "react-redux";
// import State from "./State";
import "./index.css";
// import Maxi from "./Maxi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </BrowserRouter>
    ,{/* <State /> */}
    {/* <Maxi /> */}
  </React.StrictMode>
);
