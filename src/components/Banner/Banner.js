import React from 'react';
import {
  container,
  content,
  textWrapper,
  title,
  underline,
  subtitle,
  sliderWrapper,
  slide,
  slideImage,
  filler,
} from './Banner.module.scss';
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
        <div className={textWrapper}>
          <h2 className={title}>
            Projetos <div className={underline}></div>
          </h2>
          <span className={subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 90,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className={sliderWrapper}
        >
          <SwiperSlide className={slide}>
            <img
              src="/projetosFotos/costaVerde/foto1.jpg"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img
              src="/projetosFotos/costaVerde/foto2.jpg"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img
              src="/projetosFotos/costaVerde/foto3.jpg"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img
              src="/projetosFotos/costaVerde/foto4.jpg"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img
              src="/projetosFotos/costaVerde/foto5.jpg"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
        </Swiper>
        <div className={filler}></div>
      </div>
    </Container>
  );
}
export default Banner;
