// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const rootReducer = combineReducers({
  product: productReducer,
  // other reducers...
});

export default rootReducer;
