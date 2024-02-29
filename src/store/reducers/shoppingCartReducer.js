export const shoppingCartActions = {
  SET_CART: "SET_CART",
  SET_PAYMENT: "SET_PAYMENT",
  SET_ADDRESS: "SET_ADDRESS",
};

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case shoppingCartActions.SET_CART:
      return { ...state, cart: action.payload };
    case shoppingCartActions.SET_PAYMENT:
      return { ...state, payment: action.payload };
    case shoppingCartActions.SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
