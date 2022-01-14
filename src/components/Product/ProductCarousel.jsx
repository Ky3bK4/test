import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ProductItem from "./ProductItem";
import 'swiper/css';
import "swiper/css/navigation"
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const ProductCarousel = ({products, count = 9}) => {

  const productsArray = products.slice(0, count);

  if(!productsArray.length) return null

  return (
    <Swiper
      className="productCarousel mt-4"
      navigation={true}
      spaceBetween={10}
      autoHeight={false}
      slidesPerView={'5'}
      breakpoints = {{
        320: {
          slidesPerView: '1'
        },
        468: {
          slidesPerView: '2'
        },
        768: {
          slidesPerView: '3'
        },
        992: {
          slidesPerView: '5'
        }
      }}
    >
      { productsArray && productsArray.map((product) =>
        <SwiperSlide className="h-auto" key={product.id}>
          <ProductItem product={product}/>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default ProductCarousel;