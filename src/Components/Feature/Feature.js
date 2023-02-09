import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import service from '../../assets/services.png'
import cardIcon1 from '../../assets/cardIcon1.svg'
import cardIcon2 from '../../assets/cardIcon2.png'
import cardIcon3 from '../../assets/accountibility.svg'
import cardBgImg from '../../assets/cardBgImg.png'
import './Feature.css'
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import Spinner from 'react-bootstrap/Spinner';

const Feature = ({ content }) => {


    function MyVerticallyCenteredModal(props) {
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        }, [])

        let url = "https://player.vimeo.com/video/723315086?h=d23f6817e4&amp%3Bbadge=0&amp%3Bautopause=0&amp%3Bplayer_id=0&amp%3Bapp_id=58479&fbclid=IwAR0c10wOk_1tbEbv2vKb8z9hOV5bihV0cbfzllTsv5koHf5PYol-iPBGnqM"

        if (content.dir === "rtl") {
            url = "https://vimeo.com/723315522"
            console.log("This is url", url);

        }


        return (

            <Modal style={{ zIndex: "999999" }}
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    {
                        content.dir === "rtl" ?
                            <Modal.Title
                                id="contained-modal-title-vcenter">
                                    
                                <span style={{ color: '#6733B5', fontWeight: 'bold' }}>Feva Fit </span> ابدأ رحلة التغيير مع
                            </Modal.Title> :
                            <Modal.Title
                                id="contained-modal-title-vcenter">
                                Start a adventure with <span style={{ color: '#6733B5', fontWeight: 'bold' }}>Feva Fit</span>  !
                            </Modal.Title>

                    }


                </Modal.Header>


                <Modal.Body>
                    {
                        isLoading === true ? <div className='text-center'>
                           <p>{content.dir === "rtl" ?"فضلا انتظر لحظة":"Please wait a moment."}</p>
                            <Spinner animation="grow" />
                            <Spinner animation="grow" className="mx-2" />
                            <Spinner animation="grow" />
                        </div>

                            :

                            <ReactPlayer width="100%" controls url={url}
                                onReady={() => console.log("ready")}
                                onStart={() => console.log('onStart')}
                            >

                            </ReactPlayer>
                    }
                </Modal.Body>

            </Modal>
        );
    }



    const { feature } = content
    const [modalShow, setModalShow] = useState(false);

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
                    <div className='col-md-4 col-sm-12 text-center cardHover'>
                        <div className='mx-4 p-5 shadow-sm rounded card1' data-aos="zoom-in-right" data-aos-duration="3000">
                            <div className='py-4'>
                                <img src={cardIcon1} alt="" />
                            </div>
                            <h4 className='cardTitle'>{feature.card1.title}</h4>
                            <p className='cardDes'>{feature.card1.des}</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 cardn text-center cardHover'>
                        <div className='cardBgImg'>
                            <img src={cardBgImg} alt="" />
                        </div>
                        <div className='mx-4 p-5 shadow-sm rounded card2' data-aos="zoom-in-up" data-aos-duration="3000">
                            <div className='py-2' >
                                <div className='ripple'>
                                    <img className='img-fluid player' src={cardIcon2} alt="" onClick={() => setModalShow(true)} />
                                    <div className='shadow-img'></div>
                                </div>


                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                            <h4 className='cardTitle'>{feature.card2.title}</h4>
                            <p className='cardDes'>{feature.card2.des}</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 text-center cardHover'>
                        <div className='mx-4 p-5 shadow-sm rounded card3' data-aos="zoom-in-left" data-aos-duration="3000">
                            <div className='py-4'>
                                <img src={cardIcon3} alt="" className="img-fluid w-50"/>
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