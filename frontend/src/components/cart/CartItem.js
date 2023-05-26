import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import GroupedButton from "./buttonGroup";
import { useDispatch } from "react-redux";
import { removeToCartAction } from "../../redux/action/cartAction";

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

    const dispatch = useDispatch();

    return(
        <Container>
            <LeftComponent>
                <Image src={item?.thumbnail}  />
                <GroupedButton />
            </LeftComponent>
            <RightComponent>
                <p>{item?.description}</p>
                <p>₹{item?.price}</p>
                <p className="ratings" >
                    <span> <ion-icon name="star"></ion-icon>4.2</span> ratings
                </p>
                <Remove onClick={()=>dispatch(removeToCartAction(item?._id))} variant="h6">Remove </Remove>
            </RightComponent>
        </Container>
    )
}

export default CartItem;