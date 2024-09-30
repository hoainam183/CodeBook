import { useEffect, useState } from "react";
import { ProductCard } from "../../Products/components/ProductCard";
import { useCart } from "../../../context/CartContext";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/featured_products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const {cartList} = useCart();
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => {
          const temp = cartList.filter(x => x.id == product.id)
          const checked = temp.length === 1 ? true : false          
          return <ProductCard key={product.id} product = {product} checked={checked}></ProductCard>
        })}
      </div>
    </section>
  );
};
