import React from 'react';
import { container, textWrapper, title, subtitle, saibaMais } from './NossoObjetivo.module.scss';

import Container from '../components/Container/Container';
import UnderlineText from '../components/UnderlineText/UnderlineText';
import Button from '../components/Button/Button';

function NossoObjetivo() {
  return (
    <Container className={container}>
      <div className={textWrapper}>
        <UnderlineText text="Nosso Objetivo" underlineColor="logoGreen" className={title} />
        <span className={subtitle}>
          Temos como nosso principal propósito fornecer serviços de excelência combinados a garantia
          de um futuro sustentável, conforme a categoria do negócio, gerando valor à sociedade e
          assegurando o bem-estar social para as próximas gerações.
        </span>
      </div>
      <Button
        text="Saiba Mais"
        className={saibaMais}
        buttonColor="logoGreen"
        href="/nosso-objetivo"
      />
    </Container>
  );
}
export default NossoObjetivo;
