import { useCart } from "../../context/CartContext"
import CartEmpty from "./components/CartEmpty"
import CartList from "./components/CartList"


const CartPage = () => {
    const {cartList} = useCart();
    console.log(cartList.length);
    
    return (
        <main>
            {cartList.length ? <CartList/>  : <CartEmpty/>}
        </main>
    )
}
export default CartPage