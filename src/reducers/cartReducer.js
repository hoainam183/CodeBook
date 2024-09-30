import CartList from "../pages/Cart/components/CartList";

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {...state, cartList: [...state.cartList, payload.product], total : (state.total + payload.product.price) }
    case "REMOVE_FROM_CART":
      return {...state, cartList: state.cartList.filter((item) => item.id!== payload.product.id),total : (state.total - payload.product.price) };
    case "CLEAR_CART":
      return{...state, cartList:[], total:0};
    case "UPDATE_PRICE":
      return;
    default:
      throw new Error("No case found");
  }
};
