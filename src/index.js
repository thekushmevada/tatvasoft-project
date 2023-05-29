import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { AppProvider } from "./context/productcontext";
// import { BookProvider } from "./context/bookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  {/* <AppProvider> */}
    {/* <BookProvider> */}
      <App />
    {/* </BookProvider> */}
  {/* </AppProvider> */}
  </React.StrictMode>
);

reportWebVitals();
