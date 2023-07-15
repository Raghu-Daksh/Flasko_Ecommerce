import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import GroupedButton from "./buttonGroup";
import { useDispatch } from "react-redux";
import { addToCartAction, removeToCartAction } from "../../redux/action/cartAction";
import { useEffect, useState } from "react";

const LeftComponent = styled(Box)`
    margin:0;
    display:flex;
    flex-direction:column;
    flex: 5%;
`;

const RightComponent = styled(Box)`
    flex: 95%;
`

const Container = styled(Box)`
    display: flex;
    min-width: 400px;
    justify-content: center;    
    padding: 15px;
    gap:20px;
    background: white;
`
const Image = styled('img')`
    width: 155px;
    object-fit: cover;
    height: 120px;
`

const Remove = styled(Typography)`
    font-size: 15px;
    cursor: pointer;
`

const CartItem = ({item})=>{

    let productListCart = JSON.parse(localStorage.getItem('cartItems'));
    // let [decItem, setDecItem] = useState(1);
    // let [incItem, setIncItem] = useState(1);
    const dispatch = useDispatch();
    console.log(item);
    let decreaseQuantity = ()=>{
 
        if(item?.quantity >=2 ){
            let newQty = item?.quantity - 1;
            dispatch(addToCartAction(item?.product, newQty));
        }
        //  if(incItem==0){
        //   let remaningItems =  productListCart.filter((data)=>{
        //        return  data._id !== item._id
        //   })
        //   console.log(remaningItems);
        // localStorage.setItem('cartItems', JSON.stringify(remaningItems))
        // }
    }

    let increaseQuantity = ()=>{
        // alert('item added')
        let newQty = item?.quantity + 1 ;
        dispatch(addToCartAction(item?.product, newQty));
        // console.log('item added', newQty, item?.product)
    }

    return(
        <Container>
            <LeftComponent>
                <Image src={item?.image}  />
                <div className="cartInput">
                    <button
                      onClick={
                        decreaseQuantity
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item?.quantity} readOnly />
                    <button
                      onClick={increaseQuantity
                      }
                    >
                      +
                    </button>
                  </div>
            </LeftComponent>
            <RightComponent>
                <p>{item?.description}</p>
                <p>₹{item?.price}</p>
                <p className="ratings" >
                    <span> <ion-icon name="star"></ion-icon>4.2</span> ratings
                </p>
                <Remove onClick={()=>dispatch(removeToCartAction(item?.product))} variant="h6">Remove </Remove>
            </RightComponent>
        </Container>
    )
}

export default CartItem;