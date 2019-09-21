import React, { useState, useEffect } from 'react';
import desktopImage from '../../../assets/img/main-header-desktop.jpg';
import mobileImage from '../../../assets/img/main-header-mobile.jpg';
import style from './header.module.scss';

const Header = () => {

    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
        <div className={style.App} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className={style.AppContent}>
                <h1>Pineapples</h1>
                <p>They are good</p>
            </div>
        </div>
    );
};

export default Header;