import React from 'react';
import style from './contentCard.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IContentCardProps {
    imgUrl: string;
    cardTitle: string;
    cardDescription: string;
    cardRef: string;
}

const ContentCard = ({ imgUrl, cardTitle, cardDescription, cardRef }: IContentCardProps) => {
    return (
        <Container className={style.ContentCard} >
            <Link to={cardRef} className={style.CardLink}>
                <Row>
                    <Col md="auto">
                        <img
                            alt=""
                            src={imgUrl}
                            width="273"
                            height="273"
                        />
                    </Col>
                    <Col md="8">
                        <div className="align-top">
                            <h3 className={style.CardTitle}>{cardTitle}</h3>
                            <p className={style.CardDescription}>{cardDescription}</p>
                        </div>
                    </Col>
                </Row>
                </Link>
        </Container>
    );
}

export default ContentCard;