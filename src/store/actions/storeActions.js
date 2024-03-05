import { storeActions } from "../reducers/storeReducer";

export const setSellerStoreData = (sellerStoreData) => {
  return { type: storeActions.SET_SELLER_STORE, payload: sellerStoreData };
};
