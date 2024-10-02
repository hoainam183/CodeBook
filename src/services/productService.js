
export async function getProductList(searchTerm) {
  const response = await fetch(
    `${import.meta.env.VITE_APP_HOST}/products?name_like=${searchTerm ? searchTerm : ""}`
  );
  if(!response.ok){
    throw{message: response.statusText, status: response.status};
  }
  const data = await response.json();
  return data;
}

export async function getProduct(id) {
    const response = await fetch(`${import.meta.env.VITE_APP_HOST}/products/${id}`);
      const data = await response.json();
      return data;
}

export async function getFeatureList() {
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/featured_products`);
  const data = await response.json();
  return data;
}
