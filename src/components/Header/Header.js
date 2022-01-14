import React from 'react';
import { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

import {
  container,
  content,
  logo,
  hamburger,
  button,
  drawerContainer,
  drawerContent,
  open,
  exitButton,
} from './Header.module.scss';

import Container from '../Container/Container';

export default function Header() {
  const { y } = useWindowScroll();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isSwipingDown, setIsSwipingDown] = useState(false);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const drawerContainerClass = [drawerContainer, open];

  const getStyle = () => {
    const style = { top: '0px' };

    if (isSwipingDown && y > 0) style.top = '-120px';

    return style;
  };

  const renderLogo = () => {
    return (
      <a href="/">
        <img src="/logoNoText.png" className={logo} />
      </a>
    );
  };

  const renderHeader = () => {
    return (
      <header className={container} style={getStyle()}>
        <div className={content}>
          {renderLogo()}
          <button type="button" className={button} onClick={() => setDrawerVisible(true)}>
            <img src="/hamburger.svg" className={hamburger} />
          </button>
        </div>
      </header>
    );
  };

  const renderDrawer = () => {
    return (
      <div className={drawerVisible ? drawerContainerClass.join(' ') : drawerContainer}>
        <div className={drawerContent}>
          {renderLogo()}
          <button type="button" className={exitButton} onClick={() => setDrawerVisible(false)}>
            <img src="/exit.svg" alt="exit" />
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (y < previousScrollPosition && isSwipingDown) {
      setIsSwipingDown(false);
    } else if (y > previousScrollPosition && !isSwipingDown) {
      setIsSwipingDown(true);
    }

    setPreviousScrollPosition(y);
  }, [y, previousScrollPosition, isSwipingDown]);

  return (
    <>
      {renderDrawer()}
      {renderHeader()}
    </>
  );
}
