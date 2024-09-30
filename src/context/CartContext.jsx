import { createContext, useReducer, useState } from "react";
import { useContext } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const addCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: product,
      },
    });
  };

  const removeCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        product: product,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type:"CLEAR_CART",
    })
  }
  const value = {
    state,
    dispatch,
    addCart,
    removeCart,
    clearCart,
    cartList: state.cartList,
    total: state.total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
