import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import {ProductList} from "../pages/Products/ProductList";
import { ProductDetail } from "../pages/ProductDetail";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}
