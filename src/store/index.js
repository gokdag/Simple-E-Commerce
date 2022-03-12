import { combineReducers } from "redux";
import { productReducer, firstProductReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  firstProduct: firstProductReducer,
});
export default rootReducer;
