import React from 'react';
import style from './content.module.scss';
import ContentCard from './ContentCard/ContentCard';
import { Container } from 'react-bootstrap';
import outdoorImage from '../../../assets/img/natural-rock-climbing.jpg';
import indoorImage from '../../../assets/img/indoor-gym-climbing.jpg';
import { APP_PATHS } from '../../../shared/Utils/Constants';

const Content = () => {

    const contentCards = [
        {
            imgUrl: indoorImage,
            cardTitle: 'GIMNASIOS',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing \nelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
            cardRef: '',
        },
        {
            imgUrl: outdoorImage,
            cardTitle: 'ROCA',
            cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing \nelit, sed do eiusmo dtempor incididunt ut labore et dolore magna aliqua.', 
            cardRef: APP_PATHS.locations,
        }
    ];

    return (
        <div className={style.Content}>
            <Container fluid={true} >
        <h1 className={style.ContentTitle}>ESCALA</h1>
        <div className={style.ContentCards}>
            { contentCards.map(x => <ContentCard imgUrl={x.imgUrl} cardTitle={x.cardTitle} cardDescription={x.cardDescription} cardRef={x.cardRef}/>) }
        </div>
        <h1 className={style.ContentTitle}>EXPLORA</h1>
        { /* More stuff */}
        </Container>
        </div>
    );    
}

export default Content;