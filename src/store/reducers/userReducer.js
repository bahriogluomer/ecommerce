export const userActions = {
  SET_USER: "SET_USER",
  LOG_OUT: "LOG_OUT",
};

const initialUserState = {};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...state, userData: action.payload };

    case userActions.LOG_OUT:
      return { ...state, userData: null };
    default:
      return state;
  }
};
