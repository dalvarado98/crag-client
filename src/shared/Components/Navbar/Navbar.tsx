import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Navbar, Nav } from 'react-bootstrap';
import style from './navbar.module.scss';
import darkLogo from '../../../assets/svg/logo/logoBlack.svg';
import lightLogo from '../../../assets/svg/logo/logoWhite.svg';

interface IMainNavbarProps {
  isDynamicColor: boolean;
}

const MainNavbar = ({isDynamicColor} : IMainNavbarProps) => {

  const [keepNavOnScroll, setKeepNavOnScroll] = useState(true);

  useScrollPosition(({ prevPos, currPos }: any) => {
    const isShow = currPos.y + window.innerHeight > 80;
    console.log(`Current ${currPos.y}  Prev ${prevPos.y}`)
    if (isShow !== keepNavOnScroll) setKeepNavOnScroll(isShow)
  }, [keepNavOnScroll])

  return (
    <div className={style.Nav}>

      <Navbar expand="lg" fixed="top" className={keepNavOnScroll && isDynamicColor ? style.NavWhite : style.NavScroll}>

        <Nav className="mr-auto">
          <Nav.Link href="#home" className="mx-5">LUGARES</Nav.Link>
          <Nav.Link href="#link" className="mx-5">GIMNASIOS</Nav.Link>
          <Nav.Link href="#link" className="ml-5">MAPA</Nav.Link>
        </Nav>
        <Navbar.Brand className={style.NavBrand}>
          <img
            alt=""
            src={keepNavOnScroll && isDynamicColor ? darkLogo : lightLogo}
            width="90"
            height="50"
            className="d-inline-block align-center"
          /></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#link" className="mr-5">EVENTOS</Nav.Link>
          <Nav.Link href="#home" className="mx-5">NOSOTROS</Nav.Link>
          <Nav.Link href="#link" className="mx-5">CONTACTO</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNavbar;