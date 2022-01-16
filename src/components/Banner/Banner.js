import React from 'react';
import { container, content, sliderWrapper, slide } from './Banner.module.scss';
import Container from '../Container/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css/effect-coverflow';
import 'swiper/css';

SwiperCore.use([EffectCoverflow, Pagination]);

function Banner() {
  return (
    <Container className={container}>
      <div className={content}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className={sliderWrapper}
        >
          <SwiperSlide className={slide}>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
export default Banner;
