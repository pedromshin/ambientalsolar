import React from "react"

import { container, content } from './Button.module.scss'

export default function Button(props) {
  return (
    <button>
        {props.text}
    </button>
  )
}