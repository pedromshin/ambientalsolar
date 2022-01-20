import React from 'react';
import { useState, useEffect } from 'react';
import { useWindowScroll, useWindowSize, useIsomorphicLayoutEffect } from 'react-use';

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
  headerItem,
} from './Header.module.scss';

import { siteLinks } from '../data.json';

const DESKTOP_SIZE = 1024;

export default function Header(props) {
  const { y } = useWindowScroll();
  const { width } = useWindowSize();

  const [isDesktop, setIsDesktop] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isSwipingDown, setIsSwipingDown] = useState(false);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const drawerContainerClass = [drawerContainer, open];

  const getStyle = () => {
    const style = { top: '0px' };

    if (isSwipingDown && y > 0) style.top = '-120px';

    return style;
  };

  const handleOpen = () => {
    setDrawerVisible(true);
    if (props.isOpen) props.isOpen();
  };

  const renderLogo = () => {
    return (
      <a href="/">
        <img src="/logoNoText.png" alt="logoNoText.png" className={logo} />
      </a>
    );
  };

  const renderMobileHeader = () => {
    return (
      <header className={container} style={getStyle()}>
        <div className={content}>
          {renderLogo()}
          <button type="button" className={button} onClick={handleOpen}>
            <img src="/hamburger.svg" alt="hamburger.svg" className={hamburger} />
          </button>
        </div>
      </header>
    );
  };

  const renderHeaderItems = () => {
    const headerItems = siteLinks.map((item) => {
      return (
        <a href={item.url} className={headerItem} key={item.id}>
          {item.name}
        </a>
      );
    });

    return headerItems;
  };

  const renderDrawerItems = () => {
    const drawerItems = siteLinks.map((item) => {
      return (
        <div className={listItem}>
          <a href={item.url} className={listText} key={item.id}>
            {item.name}
          </a>
        </div>
      );
    });

    return drawerItems;
  };

  const renderDesktopHeader = () => {
    return (
      <header className={container} style={getStyle()}>
        <div className={content}>
          {renderLogo()}
          <div>{renderHeaderItems()}</div>
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
          <div className={itemListWrapper}>{renderDrawerItems()}</div>
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

  useIsomorphicLayoutEffect(() => {
    setIsDesktop(width >= DESKTOP_SIZE);
  }, [width]);

  return (
    <>
      {renderDrawer()}
      {isDesktop ? renderDesktopHeader() : renderMobileHeader()}
    </>
  );
}
