import react, { useEffect, useState } from 'react';
import './search.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { SearchProductsAction } from '../../redux/action/productAction';

const SearchPage = ()=>{

    const {key} = useParams();
    const dispatch = useDispatch();
    const searchResults = useSelector(state=>state.searchProductReducer);
    console.log(searchResults);
    useEffect(()=>{
           dispatch(SearchProductsAction(key));
    },[dispatch, key]);
    
    return (
        <div>
            {
                searchResults && searchResults[0]?.map((product)=>(
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

export default SearchPage;