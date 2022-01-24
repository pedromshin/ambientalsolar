import React, { useState } from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import NossoObjetivo from '../components/NossoObjetivo/NossoObjetivo';
import Compromisso from '../components/Compromisso/Compromisso';
import QuemSomos from '../components/QuemSomos/QuemSomos';

import { Helmet } from 'react-helmet';

import { container, open } from './Home.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  const containerClass = [container];
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  if (isOpen) containerClass.push(open);

  return (
    <>
      {/* TODO what is meta charset; what is link rel canonical and href? */}
      <Helmet
        htmlAttributes={{
          lang: 'pt-BR',
        }}
      >
        <meta charSet="utf-8" />
        <meta name="description" content="Beta website for solar energy company" />
        <meta
          name="keywords"
          content="Energia, Solar, Construções, Empresa, Brasil, Rio de Janeiro"
        ></meta>
        <title>Ambiental</title>
        <link rel="canonical" href="https://ambiental.gatsbyjs.io/" />
      </Helmet>
      <div className={containerClass.join(' ')}>
        <Header isOpen={handleOpen} />
        <Banner />
        <NossoObjetivo />
        <Compromisso />
        <QuemSomos />
        <Footer />
      </div>
    </>
  );
}
