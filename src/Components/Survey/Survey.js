import React from 'react';
import surveyLogo from '../../assets/surveyLogo.svg'
import surveyLogo2 from '../../assets/surveyLogo2.svg'
import line from '../../assets/Line.svg'
import quesiton from '../../assets/question.png'
import arrow from '../../assets/arrow.png'

import './Survey.css'
import { Col, Row } from 'react-bootstrap';

const Survey = ({ content }) => {
    const { survey } = content
    const surveyQue = survey.ques
    let RightSurveryLogo = surveyLogo
    if (content.dir === 'rtl') { RightSurveryLogo = surveyLogo2 }

    return (
        <div className='survey container py-5 mt-5'>
            <div dir={content.dir} className='survey__container pt-5 mt-4'>
                <div className='survery__header mx-5 pt-5'>
                    <div className={content.dir === 'rtl' ? 'text-end' : 'text-start'}>
                        <div className='survery__logo'>
                            <img dir={content.dir} className='img-fluid' src={RightSurveryLogo} alt="" />
                        </div>
                        <h2 className="survey__title py-1">{survey.title}</h2>
                        <h2 className='feva'>Feva Fit</h2>
                    </div>
                    <div>
                        <div className='mt-5'>
                            <h1 className="survery__repeat">SURVEY</h1>
                            <h1 className="survery__repeat">SURVEY</h1>
                            <h1 className="survery__repeat">SURVEY</h1>
                        </div>
                    </div>
                </div>
                <div className='py-5 my-3'>
                    <img className='w-100 img-fluid' src={line} alt="" />
                </div>
                <div className="mx-5 pb-5">
                    {
                        surveyQue.map(q => <Row
                            key={q.num}
                            className='survey__qus__container py-4'
                        >
                            <Col sm={12} md={8} className={content.dir === 'rtl' ? 'text-end' : 'text-start'}>
                                <div className='w-75'>
                                    <h1 className="ques__number">{q.num}</h1>
                                    <p className='ques'>{q.que}</p>
                                </div>
                            </Col>

                            <Col sm={12} md={4} className='text-center quesBtngroup ps-5'>
                                <button className={content.dir === 'rtl' ? 'quesBtn ms-4' : 'quesBtn me-4'}>{q.btn1}</button>
                                <button className='quesBtn'>{q.btn2}</button>
                            </Col>
                        </Row>
                        )
                    }
                </div>
                <div className='title2 mt-5'>
                    <h1 className='survery_title2'>{survey.title2}</h1>
                    <div className='quesImg'>
                        <img className='img-fluid w-100' src={quesiton} alt="" />
                    </div>
                </div>

                <div className='title2 mt-5'>
                    <h1 className='survery_title2'>{survey.title3}</h1>
                    <div className='quesImg'>
                        <img className='img-fluid w-100' src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Survey;