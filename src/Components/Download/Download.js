import React from 'react';
import { Col, Row } from 'react-bootstrap';
import phone from '../../assets/phone.svg'
import googleplay from '../../assets/google play.svg'
import appStore from '../../assets/App store.svg'
import qrcode from '../../assets/qrcode.png'
import downloadLogo from '../../assets/downlodLogo.svg'

import './Download.css'

const Download = ({ content }) => {
    const { download } = content
    return (
        <div dir={content.dir} id="download" className='container mx-auto'>
            <Row className='g-4 shadow px-5 rounded wrapper'>
                <Col sm={12} md={5}>
                    <div className='mt-3'>
                        <img className='w-75 img-fluid' src={phone} alt="" />
                    </div>
                </Col>
                <Col sm={12} md={7}>
                    <div dir={content.dir} className={content.dir === 'rtl' ? 'text-end' : 'text-start mx-auto'}>
                        <h4 className='download_sub_title mt-4'>{download.subtitle}</h4>
                        <h1 className='download_title'>{download.title}</h1>
                        <p className='download_des'>{download.des}</p>
                    </div>
                    <div className='links d-flex'>
                        <div className={content.dir === 'rlt' ? 'text-end' : 'text-start'}>
                            <a href="#" className='d-block w-100 img-fluid mt-3'>
                                <img src={googleplay} alt="" />
                            </a>
                            <a href="#" className='d-block w-100 img-fluid mt-2'>
                                <img src={appStore} alt="" />
                            </a>
                        </div>
                        <div className='mb-5'>
                            <div className='m_t-3'>
                                <img className='w-100 img-fluid ms-3' src={qrcode} alt="" />
                            </div>
                        </div>
                    </div>
                </Col>
                <div className='download_logo'>
                    <img className='w-100 img-fluid' src={downloadLogo} alt="" />
                </div>
            </Row>
        </div >
    );
};

export default Download;