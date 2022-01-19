import React from 'react';
import { container, textWrapper, title, subtitle, saibaMais } from './Compromisso.module.scss';

import Container from '../Container/Container';
import UnderlineText from '../UnderlineText/UnderlineText';
import Button from '../Button/Button';

function Compromisso() {
  return (
    <Container className={container}>
      <div className={textWrapper}>
        <UnderlineText text="Compromisso" underlineColor="logoYellow" className={title} />
        <span className={subtitle}>Construir confiança</span>
        <span className={subtitle}>Ultrapassar padrões</span>
        <span className={subtitle}>Ser excelência</span>
        <span className={subtitle}>Ser inovador</span>
        <span className={subtitle}>Ser único</span>
      </div>
      <Button text="Saiba Mais" className={saibaMais} buttonColor="logoGreen" href="/" />
    </Container>
  );
}
export default Compromisso;
