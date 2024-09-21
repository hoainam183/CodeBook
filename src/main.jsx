import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./components/Other/ScrollToTop.js";
import { FilterProvider } from "./context/FilterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop></ScrollToTop>
        <App />
      </FilterProvider>
    </Router>
  </StrictMode>
);
