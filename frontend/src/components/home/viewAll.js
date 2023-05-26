import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../../redux/action/productAction";
import { Link } from "react-router-dom";
const ViewAll = ()=>{

    const {products} = useSelector((state)=>state.displayProductsReducer);
    const dispatch = useDispatch()


    console.log(products[0]);

    useEffect(()=>{
        dispatch(productListAction());
      },[dispatch])

    return (
        <div>
        {
           products?.map((product)=>(
                <Link style={{textDecoration:'none'}} to={`/product_details/${product._id}`} >
                    <div className='search-page' >
                        <div className='search-page-left' >
                            <img src={product?.thumbnail}  />
                        </div>
                        <div className='search-page-right' >
                            <p style={{  fontSize: '22px', fontWeight:'400'}} >
                                {product?.description}
                            </p>
                            <p className='ratings' style={{ wordSpacing:'2px', color:'grey'}}  >   <span style={{ wordSpacing:'4px', fontSize:'15   px', fontWeight:'300'}}  > {product?.rating}<ion-icon name="star"></ion-icon></span> 2000 ratings 
                            </p>
                            <p className='discount-price' style={{ wordSpacing:'2px', fontSize:'25px', fontWeight:'bold'}} >₹ {product?.price}</p>
                            <p className='market-price' >
                            <span className='market-rate'> ₹ 4000</span>
                                <span className='discount-percent' >{2000/4000*100}% off</span>
                            </p>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
)
}
export default ViewAll;