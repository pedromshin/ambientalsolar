import React from "react"

import { container, content, logo, hamburger } from './Header.module.scss'

export default function Header() {
  return (
    <div className={container}>
      <div className={content}>
        <img src='/logo.png' className={logo}/>
        <img src='/hamburger.svg' className={hamburger}/>
      </div>
    </div>
  )
}
