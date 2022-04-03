import Api from "../../api";

export const getComments = () => async (dispatch) => {
  console.log("getProductsAll");
  dispatch({ type: "GET_COMMENT_LOADING" });
  try {
    const response = await Api.get("/comments");
    dispatch({ type: "GET_COMMENT_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_COMMENT_ERROR", message: error });
  }
};

// export const getProductFirst = () => async (dispatch) => {
//   console.log("getProductFirst");
//   dispatch({ type: "GET_FIRSTPRODUCT_LOADING" });
//   try {
//     const response = await Api.get("/todos/1");
//     console.log(response);
//     dispatch({ type: "GET_FIRSTPRODUCT_SUCCESS", payload: response.data });
//   } catch (error) {
//     dispatch({ type: "GET_FIRSTPRODUCT_ERROR", message, error });
//   }
// };
