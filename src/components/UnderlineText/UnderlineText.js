import React from 'react';
import { container, underline, logoGreen, logoYellow } from './UnderlineText.module.scss';

function UnderlineText(props) {
  const underlineClass = [underline];
  const containerClass = [container]

  if (props.underlineColor === 'logoGreen') underlineClass.push(logoGreen);
  if (props.underlineColor === 'logoYellow') underlineClass.push(logoYellow);
  if (props.className) containerClass.push(props.className)

  return (
    <h2 className={containerClass.join(' ')}>
      {props.text}
      <div className={underlineClass.join(' ')}></div>
    </h2>
  );
}
export default UnderlineText;
