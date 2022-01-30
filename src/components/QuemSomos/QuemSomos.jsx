import React from 'react';
import { container, textWrapper, title, subtitle, saibaMais } from './QuemSomos.module.scss';

import Container from '../components/Container/Container';
import UnderlineText from '../components/UnderlineText/UnderlineText';
import Button from '../components/Button/Button';

function QuemSomos() {
  return (
    <Container className={container}>
      <div className={textWrapper}>
        <UnderlineText text="Quem Somos" underlineColor="logoGreen" className={title} />
        <span className={subtitle}>
          Fundada em 2011, a Ambiental se destaca no ramo da Construção Civil por conta de sua
          excelência no que tange instalações de infraestrutura.
        </span>
        <span className={subtitle}>
          Compromissados em fazer o melhor, da melhor maneira, concebendo valor aos nossos clientes,
          colaboradores, na coordenação dos nossos processos para a sociedade.
        </span>
        <span className={subtitle}>
          Estabelecendo relações de confiança, conformando a teoria à prática.
        </span>
      </div>
      <Button text="Saiba Mais" className={saibaMais} buttonColor="logoGreen" href="/quem-somos" />
    </Container>
  );
}
export default QuemSomos;
