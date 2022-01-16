import React from 'react';

import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';

import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      {/* TODO what is meta charset; what is link rel canonical and href? */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ambiental</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Banner />
    </div>
  );
}
