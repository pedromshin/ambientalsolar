import React from 'react';

import { container, button, logoYellow, logoGreen } from './Button.module.scss';

export default function Button(props) {
  const containerClass = [container];
  const buttonClass = [button];

  if (props.className) containerClass.push(props.className);
  if (props.buttonColor === 'logoYellow') buttonClass.push(logoYellow);
  if (props.buttonColor === 'logoGreen') buttonClass.push(logoGreen);

  const renderSaibaMais = () => {
    return (
      <div className={containerClass.join(' ')}>
        <a className={buttonClass.join(' ')} href={props.href}>{props.text}</a>
      </div>
    );
  };
  return <>{renderSaibaMais()}</>;
}
