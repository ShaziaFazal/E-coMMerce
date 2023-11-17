// productActions.js
import axios from "axios";
import {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,
} from "./categorySlice";

export const fetchProductByCategory =
  (categoryName, filter) => async (dispatch) => {
    const category = categoryName;
    try {
      dispatch(getCategoryStart());
      const response = await axios.get(
        `http://localhost:4000/productInfo/getProductByCategory?category=${category}&sort=${filter}`
      );
      dispatch(getCategorySuccess(response.data));
    } catch (error) {
      dispatch(getCategoryFailure(error.message));
    }
  };
