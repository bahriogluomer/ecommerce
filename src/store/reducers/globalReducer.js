export const globalActions = {
  SET_ROLES: "SET_ROLES",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_THEME: "SET_THEME",
  SET_LANGUAGE: "SET_LANGUAGE",
};

const initialState = {
  roles: [],
  categories: [],
  theme: "light",
  language: "en",
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalActions.SET_ROLES:
      return { ...state, roles: action.payload };
    case globalActions.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case globalActions.SET_THEME:
      return { ...state, theme: action.payload };
    case globalActions.SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
