import { useLocation } from "react-router-dom";
import OrderFail from "./components/OrderFail";
import OrderSuccess from "./components/OrderSuccess";

export default function OrderPage() {
  const {state} = useLocation()

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data}/> : <OrderFail/>}
    </main>
  )
}
