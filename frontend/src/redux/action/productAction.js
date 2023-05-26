import {
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST,
  GET_PRODUCTS_FAIL,
  SEARCH_PRODUCTS,
} from "../constants/constant";
import axios from 'axios'

// export const productListAction = ()=>{
//         return {
//             type: PRODUCT_LIST,
//         }
// }
// export const productDetailsAction = (_id)=>{
//     // console.log("id ", _id);
//     return {
//         type : GET_PRODUCT_DETAILS_SUCCESS,
//         payload: {_id}
//     }
// }

export const productListAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:5500/products`);
    dispatch({ type: PRODUCT_LIST, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.response });
  }
};

export const productDetailsAction = (_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5500/product_details/${_id}`
    );

    dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_DETAILS_FAIL, payload: error.response });
  }
};

export const SearchProductsAction = (query) => {
  console.log("action called", query);
  return {
    type: SEARCH_PRODUCTS,
    query,
  };
};
