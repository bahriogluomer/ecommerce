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

export const setSelectedProduct = (selectedProduct) => {
  return {
    type: productActions.SET_SELECTED_PRODUCT,
    payload: selectedProduct,
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
    console.log("page from fetch more products: ", page);
    console.log("limit:", limit, "offset:", offset);

    // Construct the query parameters
    const queryParams = new URLSearchParams();
    if (filter) queryParams.append("filter", filter);
    if (sort) queryParams.append("sort", sort);
    if (category) queryParams.append("category", category);
    if (page) queryParams.append("page", page);
    if (limit) queryParams.append("limit", limit);
    if (offset) queryParams.append("offset", offset);

    const url = `/products?${queryParams.toString()}`;
    console.log("Fetching URL:", url);

    await axiosInstance
      .get(url)
      .then((res) => {
        dispatch(updateProductList(res.data["products"]));
        dispatch(setTotalProductCount(res.data["total"]));
        dispatch(setFetchState("success"));
      })
      .catch((err) => {
        dispatch(setFetchState("error"));
        console.log(err);
      });
  };

export const fetchProductById = (id) => async (dispatch) => {
  console.log("fetching product by id: ", id);
  dispatch(setFetchState("loading single product"));
  await axiosInstance
    .get(`/products/${id}`)
    .then((res) => {
      dispatch(setSelectedProduct(res.data));
      console.log("single product", res.data);
      dispatch(setFetchState("success"));
    })
    .catch((err) => console.log(err));
};
