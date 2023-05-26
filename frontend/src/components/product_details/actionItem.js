import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/action/cartAction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const ActionItem = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCartAction(product));
  };

  const { images } = product;
  console.log(images);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const buyNow = ()=>{
  //   let response = payUsingPaytm({amount: 500, email: 'raghudaksh9@gmail.com'});
  //   let information = {
  //     action: 'https://securegw-stage.paytm.in/order/process',
  //     params : response
  //   }
  //   post(information);
  // }

  return (
    <>
      <div className="product-details-row-1-images">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          showDots={true}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        > 
          {images?.map((img) => (
            <img
              src={img}
              alt="product-image"
              className="product-details-row-1-image"
            />
          ))}
        </Carousel>
      </div>
      <div className="product-details-row-1-btns">
        <button
          className="product-details-row-1-btn add-to-cart-btn"
          onClick={() => addItemToCart()}
        >
          Add to cart
        </button>
        <button className="product-details-row-1-btn buy-now-btn" >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ActionItem;
