import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { productReducer } from "./reducers/productReducer";
import { storeReducer } from "./reducers/storeReducer";

const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
  store: storeReducer,
  shoppingCart: shoppingCartReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
