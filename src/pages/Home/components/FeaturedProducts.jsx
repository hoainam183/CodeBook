import { useEffect, useState } from "react";
import { ProductCard } from "../../Products/components/ProductCard";
import { useCart } from "../../../context/CartContext";
import { getFeatureList } from "../../../services/productService";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const {cartList} = useCart();

  useEffect(() => {
    async function fetchProducts() {
      const data =await getFeatureList();
      setProducts(data);
    }
    fetchProducts();
  }, []);
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
