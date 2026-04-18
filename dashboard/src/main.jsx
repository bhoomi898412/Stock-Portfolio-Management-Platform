import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import "./index.css";
import { GeneralContextProvider } from "./components/GeneralContext.jsx"

console.log(App);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GeneralContextProvider>
      <App />
    </GeneralContextProvider>
  </BrowserRouter>
);
