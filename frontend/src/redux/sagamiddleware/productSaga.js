import { ADD_TO_CART, GET_PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST, SEARCH_PRODUCTS, SET_ADD_TO_CART, SET_PRODUCT_DETAILS_SUCCESS, SET_PRODUCT_LIST, SET_SEARCH_PRODUCTS } from "../constants/constant";
import {put, takeEvery} from 'redux-saga/effects'

// function* listOfProduct(){
//     let data = yield fetch('http://localhost:5500/products');
//     data = yield data.json();

//     yield put({type: SET_PRODUCT_LIST, data:data});
// }
// function* productDetails(product){
    
//     let data = yield fetch(`http://localhost:5500/product_details/${product?.payload._id}`);
//     data = yield data.json();
//     yield put({type: SET_PRODUCT_DETAILS_SUCCESS, data:data});
// }

function* searchProduct(data){

    let result = yield fetch(`http://localhost:5500/search/${data.query}`);
    result = yield result.json();
    yield put({type: SET_SEARCH_PRODUCTS, result: result})
}
function* productSaga(){
    // yield takeEvery(PRODUCT_LIST, listOfProduct);
    // yield takeEvery(GET_PRODUCT_DETAILS_SUCCESS, productDetails);
    yield takeEvery(SEARCH_PRODUCTS, searchProduct);
    // yield takeEvery(ADD_TO_CART, addToCart);
}

export default productSaga;
