import { axiosInstance } from "../../axios/axiosInstance";
import { globalActions } from "../reducers/globalReducer";

export const setRolesActionCreator = (roles) => {
  return { type: globalActions.SET_ROLES, payload: roles };
};

export const setCategoriesActionCreator = (categories) => {
  return { type: globalActions.SET_CATEGORIES, payload: categories };
};

export const setThemeActionCreator = (theme) => {
  return { type: globalActions.SET_THEME, payload: theme };
};

export const setLanguageActionCreator = (language) => {
  return { type: globalActions.SET_LANGUAGE, payload: language };
};

export const getRoles = () => (dispatch) => {
  axiosInstance
    .get("/roles")
    .then((res) => {
      dispatch(setRolesActionCreator(res.data));
    })
    .catch((err) => console.log(err));
};