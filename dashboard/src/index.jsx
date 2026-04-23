import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";
import { FundsProvider } from "./FundsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FundsProvider>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </FundsProvider>
);
