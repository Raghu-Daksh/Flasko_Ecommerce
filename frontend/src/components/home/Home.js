import React, { useEffect } from "react";
import "./Home.css";
import Category from "../category/Category";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../../redux/action/productAction";
import  Slide  from "./slider";

import MidSection from "./midSection";
import CarouselSlide from "../carousel/Carousel";

const Home = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.displayProductsReducer);

  
  // console.log(products);
  // console.log(dispatch);

  console.log(products);    

  useEffect(()=>{
    dispatch(productListAction());
  },[dispatch])

  return (
    <>
     <Category/>
      <CarouselSlide />
      <div className="home">
        <Slide products={products.slice(0,8)} title= "Deal of the day" />
        <Slide products={products.slice(8,16)} title= "Discount for you" />
        <Slide products={products.slice(16,24)} title= "suggesting Items" />
        <MidSection />
        <Slide products={products.slice(16,24)} title= "Top selecetion" />
        <Slide products={products.slice(16,24)} title= "Treding offers" />
        <Slide products={products.slice(16,24)} title= "Season's top picks" />
        <Slide products={products.slice(16,24)} title= "Top deal on accessories" />
      </div>
    </>
  );
};

export default Home;
