import React from 'react';
import { container, textWrapper, subtitle, filler } from './NossaMissao.module.scss';

import Container from '../Container/Container';
import UnderlineText from '../UnderlineText/UnderlineText';

function NossaMissao() {
  return (
    <Container className={container}>
      <div className={textWrapper}>
        <UnderlineText text="Nossa Missão" underlineColor="logoGreen" />
        <span className={subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <div className={filler}></div>
    </Container>
  );
}
export default NossaMissao;
