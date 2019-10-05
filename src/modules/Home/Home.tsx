import React from 'react';
import Header from '../../shared/Components/Header/Header';
import Content from './Content/Content';
import MainNavbar from '../../shared/Components/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <MainNavbar isDynamicColor={true}/>
            <Header />
            <Content />
        </>
    );
}

export default Home;