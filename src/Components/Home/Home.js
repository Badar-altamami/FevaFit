import React from 'react';
import dumbbell from '../../assets/dumbbell.svg'
import sportsWatch from '../../assets/sportSmartwatch.svg'
import homebanner from '../../assets/homeBanner.svg'
import scrolldown from '../../assets/scrollDown.svg'

import './Home.css'

const Home = ({ content }) => {
    const { home } = content
    console.log(content.dir)
    return (
        <div className='container'>
            <div className="home pt-5">
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
                    <button className='abtn1'>{home.ActionBtn1}</button>
                    <button className='abtn2 ms-4'>{home.ActionBtn2}</button>
                </div>
            </div>
            <div className='pt-5'>
                <img className='img-fluid' src={homebanner} alt="" />
            </div>
            <div>
                <img className='pt-5' src={scrolldown} alt="" />
                <p className='scroll'>Scroll Down</p>
            </div>
        </div>
    );
};

export default Home;