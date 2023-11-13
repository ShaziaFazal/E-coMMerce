// productActions.js
import axios from "axios";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
} from "./productSlice";

export const fetchProductById = (productId) => async (dispatch) => {
  console.log(productId, "productId");
  const id = productId;
  try {
    dispatch(getProductStart());
    const response = await axios.get(
      `http://localhost:4000/productInfo/getProductById?id=${id}`
    );
    console.log(response);
    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure(error.message));
  }
};
