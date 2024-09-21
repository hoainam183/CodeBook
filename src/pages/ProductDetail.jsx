import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Rating from "../components/Elements/Rating";
import { useParams } from "react-router-dom";
import useTilte from "../hooks/useTilte";

export const ProductDetail = () => {
  // const location = useLocation();
  // console.log(location.pathname);

  
  const [product, setProduct] = useState({});
  const {id} = useParams();    
  useTilte(`${product.name}`)
  console.log(product.name);
  
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:8000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProducts();
  }, [id]);
  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product.rating}></Rating>
                {/* <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star text-yellow-500 mr-1"></i> */}
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {product.in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}
              {/* <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> */}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {product.size} MB
              </span>
            </p>
            <p className="my-3">
              <button
                className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}
              >
                Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
              </button>
              {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
              {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              aut, vel ipsum maxime quam quia, quaerat tempore minus odio
              exercitationem illum et eos, quas ipsa aperiam magnam officiis
              libero expedita quo voluptas deleniti sit dolore? Praesentium
              tempora cumque facere consectetur quia, molestiae quam, accusamus
              eius corrupti laudantium aliquid! Tempore laudantium unde labore
              voluptates repellat, dignissimos aperiam ad ipsum laborum
              recusandae voluptatem non dolore. Reiciendis cum quo illum.
              Dolorem, molestiae corporis. */}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
