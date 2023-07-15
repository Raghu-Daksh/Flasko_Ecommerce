import React, { useEffect } from "react";
import "./card.css";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ item }) => {
const navigate = useNavigate();
const {rating} = item;
  


  return (
    <div className="card" >
     <Link style={{textDecoration:' none', color:'#fff'}} to={`/product_details/${item._id}`}>
      <div className="img-sec">
        <img src={item?.thumbnail} />
      </div>
      <div className="detail-sec">
        <h4>
          {item.brand.length === 10
            ? item.brand
            : item.brand.slice(0, 15) + "..."}
        </h4>
        <div className="item-pricing">
          <p>₹ {item.price}</p>
          <p className="star-rating">
            {   
              Array.from({ length: rating }, (it, i) => (
                <ion-icon name="star"></ion-icon>
                ))
              }
            {
              !Number.isInteger(rating) ?
              <ion-icon name="star-half"></ion-icon>
              : ""
            }
          </p>
        </div>
      </div>
      </Link> 
    </div>
  );
};

export default Card;
