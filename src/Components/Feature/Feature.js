import React from 'react';
import { Row } from 'react-bootstrap';
import service from '../../assets/services.png'
import cardIcon1 from '../../assets/cardIcon1.svg'
import cardIcon2 from '../../assets/cardIcon2.png'
import cardIcon3 from '../../assets/cardIcon3.png'
import cardBgImg from '../../assets/cardBgImg.png'

import './Feature.css'

const Feature = ({ content }) => {
    const { feature } = content

    return (
        <>
            <div id='feature'>
                <div dir={content.dir} className="feature_title_container mt-5 py-5">
                    <h1 className='feature_title'>{feature.title}</h1>
                    <img className='w-100 img-fluid featureImg' src={service} alt="" />
                </div>
            </div>
            <div className='container py-5'>
                <Row className="serviceCardGroup pt-4 g-4">
                    <div className='col-md-4 col-sm-12 text-center'>
                        <div className='mx-4 p-5 shadow-sm rounded card1'>
                            <div className='py-4'>
                                <img src={cardIcon1} alt="" />
                            </div>
                            <h4 className='cardTitle'>{feature.card1.title}</h4>
                            <p className='cardDes'>{feature.card1.des}</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 cardn text-center'>
                        <div className='cardBgImg'>
                            <img src={cardBgImg} alt="" />
                        </div>
                        <div className='mx-4 p-5 shadow-sm rounded card2'>
                            <div className='py-2'>
                                <img className='img-fluid ' src={cardIcon2} alt="" />
                            </div>
                            <h4 className='cardTitle'>{feature.card2.title}</h4>
                            <p className='cardDes'>{feature.card2.des}</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 text-center'>
                        <div className='mx-4 p-5 shadow-sm rounded card3'>
                            <div className='py-4'>
                                <img src={cardIcon3} alt="" />
                            </div>
                            <h4 className='cardTitle'>{feature.card3.title}</h4>
                            <p className='cardDes'>{feature.card3.des}</p>
                        </div>
                    </div>
                </Row>
            </div>
        </>
    );
};

export default Feature;