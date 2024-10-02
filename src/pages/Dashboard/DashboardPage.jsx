import { useEffect } from "react";
import DashboardCard from "./components/DashboardCard";
import DashboardEmpty from "./components/DashboardEmpty";
import { useState } from "react";
import { getUserOrders } from "../../services/dataService";

const DashbaordPage = () => {
    const [orders, setOrders] = useState([]);
  useEffect(()=>{
    async function fetchOrder(){
        const data = await getUserOrders();
        setOrders(data);
    }
    fetchOrder();
  },[])
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard{`(${orders.length})`}
        </p>
      </section>
      <section>{orders.length && orders.map((order)=> {
        return <DashboardCard key={order.id} order={order}/>
      })}</section>
      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
};

export default DashbaordPage;
