import { combineReducers } from "redux";

// import authReducer from "./auth";
import sampleReducer from "./sample";

const reducer = combineReducers({
  sample: sampleReducer,
});
export default reducer;
