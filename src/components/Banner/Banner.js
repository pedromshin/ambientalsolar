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
  saibaMais,
} from './Banner.module.scss';

import { useWindowSize, useIsomorphicLayoutEffect } from 'react-use';
import { useState } from 'react';

import Container from '../Container/Container';
import UnderlineText from '../UnderlineText/UnderlineText';
import Button from '../Button/Button';

import { StaticImage } from 'gatsby-plugin-image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

SwiperCore.use([EffectCoverflow, Pagination]);

const DESKTOP_SIZE = 1024;

function Banner() {
  const { width } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(false);

  const renderButton = () => {
    return (
      <Button text="Saiba Mais" className={saibaMais} buttonColor="logoYellow" href='/' />
    )
  }

  const renderSwiper = () => {
    return (
      <Swiper
        modules={[Pagination]}
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
    );
  };

  useIsomorphicLayoutEffect(() => {
    setIsDesktop(width >= DESKTOP_SIZE);
  }, [width]);

  return (
    <Container className={container}>
      <div className={content}>
        <div className={textWrapper}>
          <UnderlineText text="Projetos" underlineColor="logoYellow" className={title} />
          <span className={subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          {isDesktop ? renderButton() : <></>}
        </div>
        {renderSwiper()}
        {!isDesktop ? renderButton() : <></>}
      </div>
    </Container>
  );
}
export default Banner;
