const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_LOADING":
      return { ...state, loading: true, error: "" };
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "GET_PRODUCTS_ERROR":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export const firstProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_FIRSTPRODUCT_LOADING":
      return { ...state, loading: true, error: "" };
    case "GET_FIRSTPRODUCT_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "GET_FIRSTPRODUCT_ERROR":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};
