import React from 'react';
import fitness from '../../assets/fitness.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import './Program.css'


const Program = ({ content }) => {
    const { programs } = content

    return (
        <>
            <div id='programs'>
                <div dir={content.dir} className="feature_title_container mt-5 py-5">
                    <h1 className='program__title'>{programs.title}</h1>
                    <img className='w-100 img-fluid featureImg' src={fitness} alt="" />
                </div>
            </div>
            <div className='container'>
                <Swiper
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    initialSlide="1"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    navigation
                    className="mySwiper"
                >
                    {
                        programs.slider.map(s => <SwiperSlide
                            key={s.img}
                        >
                            <div className='slider__container rounded'>
                                <img className='slider__img rounded w-100 img-fluid' src={s.img} alt="" />
                                <div className=''>
                                    <h4 dir={content.dir} className='_content slider__title'>{s.title}</h4>
                                    <p dir={content.dir} className='_content slider__des'>daily workout videos</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        )
                    }
                    <div className="popover__content">
                        <p dir={content.dir} className="popover__message p-2">{programs.popovr}</p>
                    </div>
                </Swiper>
            </div >
        </>
    );
};

export default Program;