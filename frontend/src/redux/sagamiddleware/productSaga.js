import { ADD_TO_CART, GET_PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST, SEARCH_PRODUCTS, SET_ADD_TO_CART, SET_PRODUCT_DETAILS_SUCCESS, SET_PRODUCT_LIST, SET_SEARCH_PRODUCTS } from "../constants/constant";
import {put, takeEvery} from 'redux-saga/effects'



function* searchProduct(data){
    let result = yield fetch(`http://localhost:5500/search/${data.query}`);
    result = yield result.json();
    yield put({type: SET_SEARCH_PRODUCTS, result: result})
}
function* productSaga(){
    yield takeEvery(SEARCH_PRODUCTS, searchProduct);
    // yield takeEvery(ADD_TO_CART, addToCart);
}

export default productSaga;
