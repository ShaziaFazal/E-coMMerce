// actions.js
import axios from "axios";

// Synchronous action creator
const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

// Thunk action creator
export const fetchData = () => {
  return (dispatch) => {
    // Dispatching a synchronous action before the asynchronous operation
    dispatch({ type: "FETCH_DATA_START" });

    // Asynchronous operation (e.g., API call)
    axios
      .get("http://localhost:4000/productInfo/getProductById")
      .then((response) => {
        // Dispatch a synchronous action with the received data
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        // Dispatch an error action or handle the error as needed
        dispatch({ type: "FETCH_DATA_ERROR", payload: error.message });
      });
  };
};
