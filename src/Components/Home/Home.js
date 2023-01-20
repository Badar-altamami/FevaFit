import React from 'react';
import dumbbell from '../../assets/dumbbell.svg'
import sportsWatch from '../../assets/sportSmartwatch.svg'
import homebanner from '../../assets/homeBanner.svg'
import scrolldown from '../../assets/scrollDown.svg'
import Nav from 'react-bootstrap/Nav';
import './Home.css'
import Header from '../Header/Header';
import ReactWhatsapp from 'react-whatsapp';


const Home = ({ content, setContent }) => {
    const { home } = content
    return (
        <div id='home'>
            <Header setContent={setContent} />
            <div className='container'>
                {/* whatsApp live chat  */}
                <div className='icon-bar'>
                    <button>
                        <ReactWhatsapp number="+971 582115238" message="Happy to connect with Feva Fit">
                            <i class="fa-brands fa-whatsapp whats_app ">
                            </i>
                        </ReactWhatsapp>
                    </button>
                </div>
                <div className="pt-5 home_wrapper">
                    <h5 dir={content.dir} className='home__sub__title'>{home.SubTitle1} <span>{content.home.SubTitle2}</span></h5>
                    <div className='home__title__container'>
                        <h1 className='home__title'>{home.MainTitle}</h1>
                        <div className='dumbbel'>
                            <img className='img-fluid w-100' src={dumbbell} alt="" />
                        </div>
                        <div className='sportWatch'>
                            <img className='img-fuild w-100' src={sportsWatch} alt="" />
                        </div>
                    </div>
                    <p dir={content.dir} className='home__des'>{home.des}</p>
                    <div className='w-50 h-auto mx-auto abtn__group pt-4'>
                        <Nav.Link target="_blank" href="https://cloud.protopie.io/p/447673da92">
                            <button className='abtn1'>{home.ActionBtn1}</button>
                        </Nav.Link>

                    </div>
                </div>
                <div className='pt-5'>
                    <img className='img-fluid' src={homebanner} alt="" />
                </div>
                <a style={{textDecoration: 'none' }} href='#download'>
                    <div className="scroll_arrow">
                        <img className='pt-5' src={scrolldown} alt="" />
                        <p className='scroll'>Scroll Down</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Home;