export const shoppingCartActions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  DELETE_FROM_CART: "DELETE_FROM_CART",
  CLEAN_CART: "CLEAN_CART",
  TOGGLE_CHECKBOX: "TOGGLE_CHECKBOX",
  SET_PAYMENT: "SET_PAYMENT",
  SET_ADDRESS: "SET_ADDRESS",
};

const initialState = {
  cart: [],
  payment: {},
  address: {},
  cartTotal: 0,
};

export const shoppingCartReducer = (state = initialState, action) => {
  let alreadyInCart = false;
  let currentCart = [...state.cart];
  let addedItem = { product: action.payload };
  let total = 0;

  switch (action.type) {
    case shoppingCartActions.ADD_TO_CART:
      for (const item of state.cart) {
        if (action.payload.id === item.product.id) {
          alreadyInCart = true;
          break;
        }
      }
      if (alreadyInCart) {
        for (let i = 0; i < currentCart.length; i++) {
          if (currentCart[i].product.id === action.payload.id) {
            addedItem = {
              count: currentCart[i].count + 1,
              checked: currentCart[i].checked,
              ...addedItem,
            };
            currentCart = [
              ...currentCart.slice(0, i),
              addedItem,
              ...currentCart.slice(i + 1),
            ];
            break;
          }
        }
      } else {
        addedItem = { count: 1, checked: true, ...addedItem };
        currentCart.unshift(addedItem);
      }

      for (let i = 0; i < currentCart.length; i++) {
        total += currentCart[i].product.price * currentCart[i].count;
      }
      state.cartTotal = Math.round(total * 100) / 100;
      return { ...state, cart: [...currentCart] };

    case shoppingCartActions.REMOVE_FROM_CART:
      for (let i = 0; i < currentCart.length; i++) {
        if (currentCart[i].product.id === action.payload.id) {
          if (currentCart[i].count > 1) {
            currentCart = [
              ...currentCart.slice(0, i),
              { ...currentCart[i], count: currentCart[i].count - 1 },
              ...currentCart.slice(i + 1),
            ];
          } else {
            currentCart.splice(i, 1);
          }
          break;
        }
      }

      return { ...state, cart: [...currentCart] };

    case shoppingCartActions.DELETE_FROM_CART:
      for (let i = 0; i < currentCart.length; i++) {
        if (action.payload.id === currentCart[i].product.id) {
          currentCart.splice(i, 1);
        }

        break;
      }
      return { ...state, cart: [...currentCart] };

    case shoppingCartActions.CLEAN_CART:
      state.cartTotal = 0;
      return { ...state, cart: [] };

    case shoppingCartActions.TOGGLE_CHECKBOX:
      for (let i = 0; i < currentCart.length; i++) {
        if (action.payload.id === currentCart[i].product.id) {
          currentCart = [
            ...currentCart.slice(0, i),
            { ...currentCart[i], checked: !currentCart[i].checked },
            ...currentCart.slice(i + 1),
          ];
          break;
        }
      }
      return { ...state, cart: [...currentCart] };

    case shoppingCartActions.SET_PAYMENT:
      return { ...state, payment: action.payload };
    case shoppingCartActions.SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
