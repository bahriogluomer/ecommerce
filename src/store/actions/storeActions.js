import { storeActions } from "../reducers/storeReducer";

export const setSellerStoreDataActionCreator = (sellerStoreData) => {
  return { type: storeActions.SET_SELLER_STORE, payload: sellerStoreData };
};
