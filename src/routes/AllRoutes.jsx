import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import {ProductList} from "../pages/Products/ProductList";
import { ProductDetail } from "../pages/ProductDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CartPage from "../pages/Cart/CartPage";
import ProtectedRoute from "./ProtectedRoute";
import OrderPage from "../pages/Order/OrderPage";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

        {/* <Route path="/cart" element={<ProtectedRoute><ProtectedRoute/>}></Route> */}
        <Route path="/cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}></Route>
        <Route path="/order-summary" element={<ProtectedRoute><OrderPage/></ProtectedRoute>}></Route>
      </Routes>
    </>
  );
}
