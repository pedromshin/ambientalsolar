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
  drawerTopWrapper,
  itemListWrapper,
  listItem,
  listText,
  open,
  exitButton,
} from './Header.module.scss';

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
          <div className={drawerTopWrapper}>
            {renderLogo()}
            <button type="button" className={exitButton} onClick={() => setDrawerVisible(false)}>
              <img src="/exit.svg" alt="exit" />
            </button>
          </div>
          <div className={itemListWrapper}>
            <div className={listItem}>
              <a href="/quem-somos" className={listText}>
                QUEM SOMOS
              </a>
            </div>
            <div className={listItem}>
              <a href="/nossa-missao" className={listText}>
                NOSSA MISSÃO
              </a>
            </div>
            <div className={listItem}>
              <a href="/projetos-realizados" className={listText}>
                PROJETOS REALIZADOS
              </a>
            </div>
            <div className={listItem}>
              <a href="/equipe" className={listText}>
                EQUIPE
              </a>
            </div>
          </div>
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
