import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/constant";



export const addToCartReducer = (data=[], action)=>{

    let objStr = localStorage.getItem('cartItems');
    let cartItem = [];
    if(objStr){
        cartItem = JSON.parse(objStr);
    }
    switch(action.type){
        case ADD_TO_CART :
            cartItem.push(action.data);
            localStorage.setItem('cartItems', JSON.stringify(cartItem))
                return [ ...data, action.data];
        case REMOVE_TO_CART:
            console.log(action._id);
            console.log(JSON.parse(objStr));
            const remaningItems = cartItem.filter(item=>item._id !== action._id);
            console.log(remaningItems);
            localStorage.setItem('cartItems', JSON.stringify(remaningItems))
            console.log(JSON.parse(objStr));
            return [...remaningItems];
        default :   
            return data
    }
}