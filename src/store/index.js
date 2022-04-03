import { combineReducers } from "redux";
import { commentReducer, firstProductReducer } from "./reducers/commentReducer";
import { moduleReducer } from "./reducers/moduleReducer";

const rootReducer = combineReducers({
  comments: commentReducer,
  modules: moduleReducer,
  // firstProduct: firstProductReducer,
});
export default rootReducer;
