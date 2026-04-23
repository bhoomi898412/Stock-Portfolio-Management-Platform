import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import "./index.css";
import { GeneralContextProvider } from "./components/GeneralContext.jsx";
import { FundsProvider } from "./components/FundsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FundsProvider>
      <GeneralContextProvider>
        <App />
      </GeneralContextProvider>
    </FundsProvider>
  </BrowserRouter>
);
