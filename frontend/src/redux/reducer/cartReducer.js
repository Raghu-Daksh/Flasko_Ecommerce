import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/constant";



export const addToCartReducer = (state = {data:[]}, action)=>{

    let objStr = localStorage.getItem('cartItems');
    let cartItem = [];
    if(objStr){
        cartItem = JSON.parse(objStr);
    }
    switch(action.type){
        case ADD_TO_CART :  
        const item = action.payload;    
        const isItemExist = state.data.find(
            (i) => i.product === item.product
          );
          if (isItemExist) {
            return {
              ...state,
              data: state.data.map((i) =>
                 i.product === isItemExist.product ? item : i
              ),
            };
          } else {
            return {
              ...state,
              data: [...state.data, item],
            };
          }
        case REMOVE_TO_CART:
          return {
            ...state,
             data :state.data.filter(item=>item.product !== action.id)
          }
          
        default :   
            return state
    }
}