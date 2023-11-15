// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  // other reducers...
});

export default rootReducer;
