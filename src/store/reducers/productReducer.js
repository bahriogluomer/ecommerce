export const productActions = {
  SET_PRODUCT_LIST: "SET_PRODUCT_LIST",
  SET_SELECTED_PRODUCT: "SET_SELECTED_PRODUCT",
  UPDATE_PRODUCT_LIST: "UPDATE_PRODUCT_LIST",
  SET_TOTAL_PRODUCT_COUNT: "SET_TOTAL_PRODUCT_COUNT",
  SET_PAGE_COUNT: "SET_PAGE_COUNT",
  SET_ACTIVE_PAGE: "SET_ACTIVE_PAGE",
  SET_FETCH_STATE: "SET_FETCH_STATE",
};

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "",
  selectedProduct: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case productActions.UPDATE_PRODUCT_LIST:
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };
    case productActions.SET_TOTAL_PRODUCT_COUNT:
      return { ...state, totalProductCount: action.payload };
    case productActions.SET_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    case productActions.SET_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case productActions.SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case productActions.SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};
