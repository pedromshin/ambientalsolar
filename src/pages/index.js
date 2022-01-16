import React from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      {/* TODO what is meta charset; what is link rel canonical and href? */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name='description' content='Beta website for solar energy company'/>
        <meta name="keywords" content="Energia, Solar, Construções, Empresa, Brasil, Rio de Janeiro"></meta>
        <title>Ambiental</title>
        <link rel="canonical" href="https://ambiental.gatsby.io/" />
      </Helmet>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}
