import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User.reducer";

const reducers = {
  user: userReducer,
};

export default configureStore({
  reducer: reducers,
});
