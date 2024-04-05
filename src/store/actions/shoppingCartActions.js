import { shoppingCartActions } from "../reducers/shoppingCartReducer";

export const addToCart = (data) => {
  return { type: shoppingCartActions.ADD_TO_CART, payload: data };
};

export const removeFromCart = (data) => {
  return { type: shoppingCartActions.REMOVE_FROM_CART, payload: data };
};

export const deleteFromCart = (data) => {
  return { type: shoppingCartActions.DELETE_FROM_CART, payload: data };
};

export const toggleCheckbox = (data) => {
  return { type: shoppingCartActions.TOGGLE_CHECKBOX, payload: data };
};

export const cleanCart = () => {
  return { type: shoppingCartActions.CLEAN_CART };
};

export const setPayment = (payment) => {
  return { type: shoppingCartActions.SET_PAYMENT, payload: payment };
};

export const setAddress = (address) => {
  return { type: shoppingCartActions.SET_ADDRESS, payload: address };
};
