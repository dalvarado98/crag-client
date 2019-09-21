import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Navbar, Nav } from 'react-bootstrap';
import style from './navbar.module.scss';
import darkLogo from '../../assets/svg/logo/logoBlack.svg';
import lightLogo from '../../assets/svg/logo/logoWhite.svg';

const MainNavbar = () => {

  const [changeNavOnScroll, setChangeNavOnScroll] = useState(true);

  useScrollPosition(({ prevPos, currPos }: any) => {
    const isShow = currPos.y > prevPos.y;
    if (isShow !== changeNavOnScroll) setChangeNavOnScroll(isShow)
  }, [changeNavOnScroll])

  return (
    <div className={style.Nav}>

      <Navbar expand="lg" fixed="top" className={changeNavOnScroll ? style.NavWhite : style.NavScroll}>

        <Nav className="mr-auto">
          <Nav.Link href="#home" className="mx-5">LUGARES</Nav.Link>
          <Nav.Link href="#link" className="mx-5">GIMNASIOS</Nav.Link>
          <Nav.Link href="#link" className="mx-5">MAPA</Nav.Link>
        </Nav>
        <Navbar.Brand className={style.NavBrand}>
          <img
            alt=""
            src={changeNavOnScroll ? darkLogo : lightLogo}
            width="90"
            height="50"
            className="d-inline-block align-top"
          /></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="mx-5">NOSOTROS</Nav.Link>
          <Nav.Link href="#link" className="mx-5">CONTACTO</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNavbar;