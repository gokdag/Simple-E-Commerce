import { combineReducers } from "redux";
import { commentReducer, firstProductReducer } from "./reducers/commentReducer";
import { moduleReducer } from "./reducers/moduleReducer";
import {counterReducer} from './reducers/counterReducer'

const rootReducer = combineReducers({
  comments: commentReducer,
  modules: moduleReducer,
  counter:counterReducer,
  // firstProduct: firstProductReducer,
});
export default rootReducer;
