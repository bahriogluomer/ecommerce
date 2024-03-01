import { userActions } from "../reducers/userReducer";

export const setUserActionCreator = (userData) => {
  return { type: userActions.SET_USER, payload: userData };
};

export const logOutActionCreator = () => {
  return { type: userActions.LOG_OUT };
};
