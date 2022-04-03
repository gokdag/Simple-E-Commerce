const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
};

export const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_COMMENT_LOADING":
      return { ...state, loading: true, error: "" };
    case "GET_COMMENT_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "GET_COMMENT_ERROR":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

// export const firstProductReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "GET_FIRSTPRODUCT_LOADING":
//       return { ...state, loading: true, error: "" };
//     case "GET_FIRSTPRODUCT_SUCCESS":
//       return { ...state, loading: false, data: action.payload, error: "" };
//     case "GET_FIRSTPRODUCT_ERROR":
//       return { ...state, loading: false, error: action.message };
//     default:
//       return state;
//   }
// };
