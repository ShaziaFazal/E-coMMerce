import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./User.reducer";

const reducers = {
  user: UserReducer,
};
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
