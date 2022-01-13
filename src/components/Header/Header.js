import React from "react"

import { container, content, logo, hamburger } from './Header.module.scss'

import Container from '../Container/Container'

export default function Header() {

  return (
    <Container className={container}>
      <div className={content}>
        <img src='/logo.png' className={logo}/>
        <img src='/hamburger.svg' className={hamburger}/>
      </div>
    </Container>
  )
}
