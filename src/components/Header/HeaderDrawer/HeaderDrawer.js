import React from 'react';

import { container, content } from './HeaderDrawer.module.scss';
import Container from '../../Container/Container';

function HeaderDrawer(props) {
  const renderDrawer = () => {
    return (
      <Container className={container}>
        <div className={content}>content</div>
      </Container>
    );
  };
  return <>{props.isOpen ? renderDrawer() : <></>}</>;
}

export default HeaderDrawer;
