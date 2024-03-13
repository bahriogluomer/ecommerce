import { axiosInstance } from "../../axios/axiosInstance";
import { globalActions } from "../reducers/globalReducer";

export const setRoles = (roles) => {
  return { type: globalActions.SET_ROLES, payload: roles };
};

export const setCategories = (categories) => {
  return { type: globalActions.SET_CATEGORIES, payload: categories };
};

export const setTheme = (theme) => {
  return { type: globalActions.SET_THEME, payload: theme };
};

export const setLanguage = (language) => {
  return { type: globalActions.SET_LANGUAGE, payload: language };
};

//getRoles thunk action
export const getRoles = () => async (dispatch) => {
  await axiosInstance
    .get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => console.log(err));
};

export const getCategories = () => async (dispatch) => {
  await axiosInstance
    .get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
    })
    .catch((err) => console.log(err));
};
