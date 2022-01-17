import React from 'react';
import { text, underline, logoGreen, logoYellow } from './UnderlineText.module.scss';

function UnderlineText(props) {
  const underlineClass = [underline];

  if (props.underlineColor === 'logoGreen') underlineClass.push(logoGreen);
  if (props.underlineColor === 'logoYellow') underlineClass.push(logoYellow);

  return (
    <h2 className={text}>
      {props.text}
      <div className={underlineClass.join(' ')}></div>
    </h2>
  );
}
export default UnderlineText;
