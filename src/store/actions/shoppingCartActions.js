import { shoppingCartActions } from "../reducers/shoppingCartReducer";

export const setCart = (cart) => {
  return { type: shoppingCartActions.SET_CART, payload: cart };
};

export const setPayment = (payment) => {
  return { type: shoppingCartActions.SET_PAYMENT, payload: payment };
};

export const setAddress = (address) => {
  return { type: shoppingCartActions.SET_ADDRESS, payload: address };
};
