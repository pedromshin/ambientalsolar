import React from 'react';

import { section, container, fullwidth } from './Container.module.scss';

export default function Container(props) {
  const sectionClass = [section];
  const containerClass = [container];

  if (props.className) sectionClass.push(props.className);
  if (props.fullwidth) containerClass.push(fullwidth);

  return (
    <section className={sectionClass.join(' ')} style={props.style}>
      <div className={containerClass.join(' ')}>{props.children}</div>
    </section>
  );
}
