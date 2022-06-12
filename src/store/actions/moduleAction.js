import Api from "../../api";

export const getModuleItems = (params) => async (dispatch) => {
  dispatch({ type: "GET_MODULE_LOADING" });
  try {
    const response = await Api.get("/modules");
    dispatch({ type: "GET_MODULE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_MODULE_ERROR", message: error });
  }
};
