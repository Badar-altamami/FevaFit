import React from 'react';
import { Col, Row } from 'react-bootstrap';
import phone from '../../assets/phone.svg'

import './Download.css'

const Download = ({ content }) => {
    const { download } = content
    return (
        <div className='download container'>
            <Row className='g-4 shadow px-5 rounded'>
                <Col sm={12} md={5}>
                    <div className='mt-3 me-5'>
                        <img className='w-75 img-fluid' src={phone} alt="" />
                    </div>
                </Col>
                <Col sm={12} md={7}>
                    <div className='text-start w-75 mx-auto'>
                        <h4 className='download_sub_title mt-4'>{download.subtitle}</h4>
                        <h1 className='download_title'>{download.title}</h1>
                        <p className='download_des'>{download.des}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Download;