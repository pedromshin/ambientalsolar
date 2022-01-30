import React from 'react';
import {
  container,
  content,
  listItem,
  listText,
  faleConosco,
  contactBorder,
  contact,
  logoWrapper,
  logoImage,
} from './Footer.module.scss';
import Container from '../components/Container/Container';

import { siteLinks } from '../data.json';

function Footer() {
  const faleConoscoClass = [listItem, faleConosco];

  const renderFooterItems = () => {
    const footerItems = siteLinks.map((item) => {
      return (
        <div className={listItem}>
          <a href={item.url} className={listText} key={item.id}>
            {item.name}
          </a>
        </div>
      );
    });

    return <div>{footerItems}</div>;
  };

  const renderFaleConosco = () => {
    return (
      <div className={faleConoscoClass.join(' ')}>
        <span className={listText}>Fale Conosco</span>
        <div className={contactBorder}>
          <span className={contact}>Telefone: (21) 9-9999-9999</span>
          <span className={contact}>Whatsapp: (21) 9-9999-9999</span>
          <span className={contact}>e-mail: abcdef@fghi.com.br</span>
        </div>
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <a href="/" className={logoWrapper}>
        <img src="/logo.png" alt="logoNoText.png" className={logoImage} />
      </a>
    );
  };

  return (
    <Container className={container}>
      <div className={content}>
        {renderFooterItems()}
        {renderFaleConosco()}
        {renderLogo()}
      </div>
    </Container>
  );
}
export default Footer;
