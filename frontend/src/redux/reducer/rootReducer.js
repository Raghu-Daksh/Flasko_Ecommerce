import { combineReducers } from "redux";
import {  displayProductsReducer,  getProductDetailsReducer,searchProductReducer } from "./productReducer";
import { addToCartReducer } from "./cartReducer";

export default combineReducers({ 
     displayProductsReducer,
     getProductDetailsReducer,
     searchProductReducer,
     addToCartReducer
});
