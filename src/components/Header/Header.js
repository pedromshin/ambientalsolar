import React from "react"
import { useState } from 'react';


import { container, content, logo, hamburger, button } from './Header.module.scss'

import Container from '../Container/Container'

export default function Header() {

  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Container className={container}>
      <div className={content}>
        <img src='/logo.png' className={logo}/>
        <button
              type="button"
              className={button}
              onClick={() => {
                setDrawerVisible(true);
              }}
            >
               <img src='/hamburger.svg' className={hamburger}/>
            </button>
      </div>
    </Container>
  )
}
