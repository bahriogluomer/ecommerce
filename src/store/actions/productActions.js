import { productActions } from "../reducers/productReducer";

export const setProductListActionCreator = (productList) => {
  return { type: productActions.SET_PRODUCT_LIST, payload: productList };
};

export const setTotalProductCountActionCreator = (ProductCount) => {
  return {
    type: productActions.SET_TOTAL_PRODUCT_COUNT,
    payload: ProductCount,
  };
};

export const setPageCountActionCreator = (pageCount) => {
  return { type: productActions.SET_PAGE_COUNT, payload: pageCount };
};

export const setActivePageActionCreator = (activePage) => {
  return { type: productActions.SET_ACTIVE_PAGE, payload: activePage };
};

export const setFetchStateActionCreator = (fetchState) => {
  return { type: productActions.SET_FETCH_STATE, payload: fetchState };
};

export const fetchProductsActionCreator = (fetchState) => {
  return { type: productActions.SET_FETCH_STATE, payload: fetchState };
};
