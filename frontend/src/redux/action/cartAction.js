import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/constant";
import axios from "axios";
export const addToCartAction = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5500/product_details/${id}`);

  // console.log(data  , quantity);
  console.log(data  , quantity);

  dispatch({ 
    type: ADD_TO_CART,
    payload: {
      product: data._id,
      brand: data.brand,
      price: data.price,
      image: data.thumbnail,
      description: data.description,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().addToCartReducer.data));
};
export const removeToCartAction =  (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_TO_CART,
    id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().addToCartReducer.data));
};
