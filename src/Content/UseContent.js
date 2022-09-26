import cardImg1 from '../assets/card1Img.png'
import cardImg2 from '../assets/card2Img.png'
import cardImg3 from '../assets/card3Img.png'

const UseContent = () => {
    const eng = {
        dir: 'rtl',
        home: {
            MainTitle: 'I BELIVE I ACHIEVE',
            SubTitle1: 'The best way to improve your body?  Build the mind first',
            SubTitle2: 'Build the mind first',
            Des: 'Feva Fit is a mind-body approach to fitness that works. We help you change your perception of what it means to be fit. And by doing so, we can transform both your mind and body.',
            ActionBtn1: 'TRY OUR PROTOTYPE',
            ActionBtn2: 'LEARN MORE',
        },
        survey: {
            title: 'Here are some questions from',
            ques: [
                {
                    num: '01',
                    que: 'Have you ever joined a gym but stopped going after a few weeks?',
                    btn1: 'Yes',
                    btn2: 'No',
                },
                {
                    num: '02',
                    que: 'Have you ever set a fitness goal, bought gym apparel or got excited about getting in shape?',
                    btn1: 'Yes',
                    btn2: 'No',
                },
                {
                    num: '03',
                    que: 'What do you think prevented you from achieving your fullest fitness potential and goal?',
                    btn1: 'Yes',
                    btn2: 'No',
                }
            ],
            title2: 'What do you think prevented you from achieving your fullest fitness potential and goal',
            title3: 'Maybe you’ve tried to get fit in the past, but it just didn’t work out due to lack of consistency or motivation.',
        },
        feature: {
            title: 'FEATURE LIST',
            card1: {
                title: 'Behavioural Hacks!',
                des: 'Feva Fit provides a suite of behavioral hacks to reinforce good habits and help you build the resilience you need to achieve your fitness goals.'
            },
            card2: {
                title: 'Hypno Journey',
                des: 'Join the transformation. With powerful & short hypnosis journeys that will help you achieve real results and stay consistent with your workouts. Give us 10 minutes per day for 21 days, and see how easy it can be to get in shape. '
            },
            card3: {
                title: 'Inspire Journal',
                des: 'Journal, share and inspire others on your weight loss journey. Keep a record of your daily objectives and prepare to reach your goals.'
            },
        },
        programs: {
            title: 'OUR FLAGSHIP PROGRAMS',
            slider: [
                {
                    title: '3 Weeks Program',
                    des: '30 daily workout videos',
                    img: cardImg1,
                    popovr: 'Feva Fit is a high intensity interval training workout that will transform your physique in no time.Our video workouts are short, intensive and effective.'
                },
                {
                    title: '3 Weeks Transformation Program',
                    des: '30 daily workout videos',
                    img: cardImg2,
                    popovr: 'Feva Fit is a high intensity interval training workout that will transform your physique in no time.Our video workouts are short, intensive and effective.'
                },
                {
                    title: '12 Weeks Program',
                    des: '30 daily workout videos',
                    img: cardImg3,
                    popovr: 'Feva Fit is a high intensity interval training workout that will transform your physique in no time.Our video workouts are short, intensive and effective.'
                }
            ]
        },
        download: {
            subtitle: 'Mind before matter',
            title: 'Try Our Prototype Now!',
            des: 'Today is the day you start living a leaner, healthier life. Let Feva Fit be your guide on this journey.'
        }
    }

    return {
        eng
    }
}

export default UseContent;