const INITIAL_STATE = {
  data: [],
  loading: true,
  error: "",
};

export const moduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_MODULE_LOADING":
      return { ...state, loading: true, error: "" };
    case "GET_MODULE_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "GET_MODULE_ERROR":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};
