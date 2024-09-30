import { Navigate } from "react-router-dom"
// import CartPage from "../pages/Cart/CartPage"

export default function ProtectedRoute({children}) {
    const token = JSON.parse(sessionStorage.getItem('token'));
  return token ? children : <Navigate to="/login"/>
  
}
