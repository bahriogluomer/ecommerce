export const userActions = {
  SET_USER: "SET_USER",
  LOG_OUT: "LOG_OUT",
};

const initialUserState = {
  userName: "",
  email: "",
  role_id: "",
  isLoggedIn: false,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case userActions.SET_USER:
      return { ...state, user: action.payload };

    case userActions.LOG_OUT:
      return { ...state, user: initialUserState };
    default:
      return state;
  }
};
