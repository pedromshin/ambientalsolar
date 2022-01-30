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
} from './Projetos.module.scss';

import { useWindowSize, useIsomorphicLayoutEffect } from 'react-use';
import { useState } from 'react';

import Container from '../components/Container/Container';
import UnderlineText from '../components/UnderlineText/UnderlineText';
import Button from '../components/Button/Button';

import { StaticImage } from 'gatsby-plugin-image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import 'swiper/css/effect-coverflow';
import 'swiper/css';

SwiperCore.use([EffectCoverflow]);

const DESKTOP_SIZE = 1024;

function Projetos() {
  const { width } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(false);

  const renderButton = () => {
    return (
      <Button text="Saiba Mais" className={saibaMais} buttonColor="logoYellow" href="/projetos" />
    );
  };

  const renderSwiper = () => {
    return (
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
          slideShadows: false,
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
    <Container className={container} fullwidth>
      <div className={content}>
        <div className={textWrapper}>
          <UnderlineText text="Projetos" underlineColor="logoYellow" className={title} />
          <span className={subtitle}>Conheça os empreendimentos de infraestru</span>
          {isDesktop ? renderButton() : <></>}
        </div>
        {renderSwiper()}
        {!isDesktop ? renderButton() : <></>}
      </div>  
    </Container>
  );
}
export default Projetos;
