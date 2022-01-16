import React from 'react';
import { container, content, title, sliderWrapper, slide, slideImage } from './Banner.module.scss';
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
        <h2 className={title}>
          Projetos
        </h2>
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
            <img src='/projetosFotos/costaVerde/foto1.jpg' className={slideImage} alt="slideImage" />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img src='/projetosFotos/costaVerde/foto2.jpg' className={slideImage} alt="slideImage" />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img src='/projetosFotos/costaVerde/foto3.jpg' className={slideImage} alt="slideImage" />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img src='/projetosFotos/costaVerde/foto4.jpg' className={slideImage} alt="slideImage" />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <img src='/projetosFotos/costaVerde/foto5.jpg' className={slideImage} alt="slideImage" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
export default Banner;
