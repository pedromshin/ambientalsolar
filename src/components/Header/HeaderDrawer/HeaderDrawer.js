import React from 'react';
import { createPortal } from 'react-dom';

import { container, content } from './HeaderDrawer.module.scss';
import Container from '../../Container/Container';

function HeaderDrawer(props) {
  const renderDrawer = () => {
    return (
      <Container className={container} id='drawer-portal'>
        <div className={content}>content</div>
      </Container>
    );
  };
  return props.isOpen ? createPortal(renderDrawer, document.getElementById('drawer-portal')) : null 
}

export default HeaderDrawer;
