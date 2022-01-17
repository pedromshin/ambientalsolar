import React from 'react';
import {
  container,
  content,
  textWrapper,
  title,
  subtitle,
  sliderWrapper,
  slide,
  slideImage,
} from './Banner.module.scss';

import Container from '../Container/Container';
import UnderlineText from '../UnderlineText/UnderlineText';

import { StaticImage } from 'gatsby-plugin-image';

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
          <UnderlineText text="Projetos" underlineColor="logoYellow" className={title}/>
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
            <StaticImage
              src="./projetosFotos/costaVerde/foto1.webp"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <StaticImage
              src="./projetosFotos/costaVerde/foto2.webp"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <StaticImage
              src="./projetosFotos/costaVerde/foto3.webp"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <StaticImage
              src="./projetosFotos/costaVerde/foto4.webp"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <StaticImage
              src="./projetosFotos/costaVerde/foto5.webp"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
          <SwiperSlide className={slide}>
            <StaticImage
              src="./projetosFotos/costaVerde/foto6.webp"
              className={slideImage}
              alt="slideImage"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
export default Banner;
