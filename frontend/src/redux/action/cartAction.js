import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/constant"

export const addToCartAction = (data)=>{
        return{
            type: ADD_TO_CART,
            data :data
        }
}
export const removeToCartAction = (_id)=>{
        return{
            type: REMOVE_TO_CART,
            _id
        }
}