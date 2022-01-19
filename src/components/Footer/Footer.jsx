import React from 'react';
import {
  container,
  content,
  itemListWrapper,
  listItem,
  listText,
  faleConosco,
  contactBorder,
  contact,
  logo,
} from './Footer.module.scss';
import Container from '../Container/Container';

function Footer() {
  const faleConoscoClass = [listItem, faleConosco];

  const renderLogo = () => {
    return (
      <a href="/">
        <img src="/logo.png" alt="logoNoText.png" className={logo} />
      </a>
    );
  };

  return (
    <Container className={container}>
      <div className={content}>
        <div className={itemListWrapper}>
          <div className={listItem}>
            <a href="/" className={listText}>
              HOME
            </a>
          </div>
          <div className={listItem}>
            <a href="/quem-somos" className={listText}>
              QUEM SOMOS
            </a>
          </div>
          <div className={listItem}>
            <a href="/nossa-missao" className={listText}>
              NOSSA MISSÃO
            </a>
          </div>
          <div className={listItem}>
            <a href="/projetos-realizados" className={listText}>
              PROJETOS REALIZADOS
            </a>
          </div>
          <div className={listItem}>
            <a href="/equipe" className={listText}>
              EQUIPE
            </a>
          </div>
          <div className={listItem}>
            <a href="/energia-solar" className={listText}>
              ENERGIA SOLAR
            </a>
          </div>
          <div className={faleConoscoClass.join(' ')}>
            <span className={listText}>Fale Conosco</span>
            <div className={contactBorder}>
              <span className={contact}>Telefone: (21) 9-9999-9999</span>
              <span className={contact}>Whatsapp: (21) 9-9999-9999</span>
              <span className={contact}>e-mail: abcdef@fghi.com.br</span>
            </div>
          </div>
          {renderLogo()}
        </div>
      </div>
    </Container>
  );
}
export default Footer;
