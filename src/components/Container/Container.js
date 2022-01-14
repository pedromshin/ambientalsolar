import React from 'react';

import { section, container } from './Container.module.scss';

export default function Container(props) {
  const sectionClass = [section];

  if (props.className) sectionClass.push(props.className);

  return (
    <section className={sectionClass.join(' ')}>
      <div className={container}>{props.children}</div>
    </section>
  );
}
