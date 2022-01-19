import React from 'react';
import {
  container,
  textWrapper,
  title,
  subtitle,
  saibaMais,
  filler,
} from './NossaMissao.module.scss';

import Container from '../Container/Container';
import UnderlineText from '../UnderlineText/UnderlineText';
import Button from '../Button/Button';

function NossaMissao() {
  return (
    <Container className={container}>
      <div className={textWrapper}>
        <UnderlineText text="Nossa Missão" underlineColor="logoGreen" className={title} />
        <span className={subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <Button text="Saiba Mais" className={saibaMais} buttonColor="logoGreen" href='/' />
      <div className={filler}></div>
    </Container>
  );
}
export default NossaMissao;
