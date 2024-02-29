export const storeActions = {
  SET_SELLER_STORE: "SET_SELLER_STORE",
};

const initialState = {
  sellerStoreData: {},
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case storeActions.SET_STORE:
      return { ...state, sellerStoreData: action.payload };

    default:
      return state;
  }
};
