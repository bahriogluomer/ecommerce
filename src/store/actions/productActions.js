import { productActions } from "../reducers/productReducer";

export const setProductList = (productList) => {
  return { type: productActions.SET_PRODUCT_LIST, payload: productList };
};

export const setTotalProductCount = (ProductCount) => {
  return {
    type: productActions.SET_TOTAL_PRODUCT_COUNT,
    payload: ProductCount,
  };
};

export const setPageCount = (pageCount) => {
  return { type: productActions.SET_PAGE_COUNT, payload: pageCount };
};

export const setActivePage = (activePage) => {
  return { type: productActions.SET_ACTIVE_PAGE, payload: activePage };
};

export const setFetchState = (fetchState) => {
  return { type: productActions.SET_FETCH_STATE, payload: fetchState };
};

export const fetchProducts = (fetchState) => {
  return { type: productActions.SET_FETCH_STATE, payload: fetchState };
};
