import { shoppingCartActions } from "../reducers/shoppingCartReducer";

export const setCartActionCreator = (cart) => {
  return { type: shoppingCartActions.SET_CART, payload: cart };
};

export const setPaymentActionCreator = (payment) => {
  return { type: shoppingCartActions.SET_PAYMENT, payload: payment };
};

export const setAddressActionCreator = (address) => {
  return { type: shoppingCartActions.SET_ADDRESS, payload: address };
};
