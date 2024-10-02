function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token, cbid };
}

export async function getUser() {
  const browserData = getSession();

  const requestOptions = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_APP_HOST}/600/users/${browserData.cbid}`,
    requestOptions
  );
  const data = await response.json();
  return data;
}

export async function getUserOrders() {
    const browserData = getSession();

  const requestOptions = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${browserData.token}`,
    },
  };

  const response = await fetch(
    `${import.meta.env.VITE_APP_HOST}/660/orders?user.id=${browserData.cbid}`,
    requestOptions
  );
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user) {
    const browserData = getSession();
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch(`${import.meta.env.VITE_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  });

  const data = await response.json();
  return data;
}
