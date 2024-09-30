import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./components/Other/ScrollToTop.js";
import { FilterProvider } from "./context/FilterContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop></ScrollToTop>
          <ToastContainer
            closeButton={false}
            autoClose={3000}
            position="bottom-right"
          ></ToastContainer>
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
