import { combineReducers } from "redux";
import { commentReducer, firstProductReducer } from "./reducers/commentReducer";

const rootReducer = combineReducers({
  products: commentReducer,
  // firstProduct: firstProductReducer,
});
export default rootReducer;
