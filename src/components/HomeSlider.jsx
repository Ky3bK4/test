import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player/youtube'
import {Col, Image, Row} from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation"
import slideImg1 from '../assets/slides/slide1.jpg'
import slideImg2 from '../assets/slides/slide2.jpg'
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const HomeSlider = () => {
  return (
    <Row>
      <Col>
        <Swiper
          className="homeSlider"
          navigation={true}
          spaceBetween={20}
          slidesPerView={'1'}
        >
          <SwiperSlide className="homeSlide">
            <Image src={slideImg1}/>
          </SwiperSlide>
          <SwiperSlide className="homeSlide">
            <Image src={slideImg2}/>
          </SwiperSlide>
          <SwiperSlide className="homeSlide">
            {({ isActive }) => (
              <ReactPlayer
                playing={isActive}
                controls={true}
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                volume={0.05}
                width={'100%'}
                height={'100%'}
              />
            )}
          </SwiperSlide>
        </Swiper>
      </Col>
    </Row>
  );
};

export default HomeSlider;