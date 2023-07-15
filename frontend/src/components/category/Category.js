import React from "react";
import './category.css'
import { navData } from "../../data/data";
import { useNavigate, useParams } from "react-router-dom";

const Category = () => {

  const navigate = useNavigate();

  const handleCategory = (value)=>{
    navigate(`/search/${value}`)
  }
  
  return(
      <div className="categorys">
          {
              navData.map((item, key)=>(
                <div className="category" key={key} onClick={()=>handleCategory(item.text)} >
                    <img src={item.url} />
                    <p>{item.text}</p>
                </div>
              ))
          }
      </div>
  )
};

export default Category;
