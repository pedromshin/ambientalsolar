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
        <ul>
          <li className={subtitle}>Ser único</li>
          <li className={subtitle}>Ser inovador</li>
          <li className={subtitle}>Ser excelência</li>
          <li className={subtitle}>Construir confiança</li>
          <li className={subtitle}>Ultrapassar padrões</li>
        </ul>
      </div>
      <Button
        text="Saiba Mais"
        className={saibaMais}
        buttonColor="logoYellow"
        href="/compromisso"
      />
    </Container>
  );
}
export default Compromisso;
