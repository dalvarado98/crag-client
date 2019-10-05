import React from 'react';
import MainNavbar from '../../shared/Components/Navbar/Navbar';
import style from './climbingLocations.module.scss';

const ClimbingLocations = () => {
    return (
        <>
            <MainNavbar isDynamicColor={false} />
            <div className={style.ClimbingLocationsContent}>
                <h1 className={style.ContentTitle}>ROCA</h1>
                
            </div>

        </>
    );
};

export default ClimbingLocations;