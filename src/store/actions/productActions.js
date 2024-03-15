import { axiosInstance } from "../../axios/axiosInstance";
import { productActions } from "../reducers/productReducer";

export const setProductList = (productList) => {
  return { type: productActions.SET_PRODUCT_LIST, payload: productList };
};

export const updateProductList = (productList) => {
  return { type: productActions.UPDATE_PRODUCT_LIST, payload: productList };
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

export const fetchProducts =
  (filter, sort, category, page, limit, offset) => async (dispatch) => {
    dispatch(setFetchState("loading"));

    await axiosInstance
      .get(
        `/products?${filter ? "filter=" + filter : ""}${
          sort ? `&sort=${sort}` : ""
        }${category ? `&category=${category}` : ""}${
          page ? `&page=${page}` : ""
        }${limit ? `&limit=${limit}` : ""}${offset ? `&offset=${offset}` : ""}`
      )
      .then((res) => {
        dispatch(setProductList(res.data["products"]));
        dispatch(setTotalProductCount(res.data["total"]));
        dispatch(setFetchState("success"));
        // console.log("filterfromfetch:", filter);
      })
      .catch((err) => {
        dispatch(setFetchState("error"));
        console.log(err);
      });
  };

export const fetchMoreProducts =
  (filter, sort, category, page, limit, offset) => async (dispatch) => {
    dispatch(setFetchState("loading more products"));

    await axiosInstance
      .get(
        `/products?${filter ? "filter=" + filter : ""}${
          sort ? `&sort=${sort}` : ""
        }${category ? `&category=${category}` : ""}${
          page ? `&page=${page}` : ""
        }${limit ? `&limit=${limit}` : ""}${offset ? `&offset=${offset}` : ""}`
      )
      .then((res) => {
        dispatch(updateProductList(res.data["products"]));
        dispatch(setTotalProductCount(res.data["total"]));
        console.log("fetched more products", res.data["products"]);
        dispatch(setFetchState("success"));
      })
      .catch((err) => {
        dispatch(setFetchState("error"));
        console.log(err);
      });
  };
