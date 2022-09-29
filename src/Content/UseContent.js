import cardImg1 from '../assets/card1Img.png'
import cardImg2 from '../assets/card2Img.png'
import cardImg3 from '../assets/card3Img.png'

const UseContent = () => {
    let eng = {
        dir: 'ltr',
        home: {
            MainTitle: 'I BELIVE I ACHIEVE',
            SubTitle1: 'The best way to improve your body?',
            SubTitle2: 'Build the mind first',
            des: 'Feva Fit is a mind-body approach to fitness that works. We help you change your perception of what it means to be fit. And by doing so, we can transform both your mind and body.',
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
                },
                {
                    title: '3 Weeks Transformation Program',
                    des: '30 daily workout videos',
                    img: cardImg2,
                },
                {
                    title: '12 Weeks Program',
                    des: '30 daily workout videos',
                    img: cardImg3,
                }
            ],
            popovr: 'Feva Fit is a high intensity interval training workout that will transform your physique in no time. Our video workouts are short, intensive and effective.'
        },
        download: {
            subtitle: 'Mind before matter',
            title: 'Try Our Prototype Now!',
            des: 'Today is the day you start living a leaner, healthier life. Let Feva Fit be your guide on this journey.'
        }
    }

    let arb = {
        dir: 'rtl',
        home: {
            MainTitle: 'I BELIVE I ACHIEVE',
            SubTitle1: 'أفضل طريقة لتحسين جسمك؟',
            SubTitle2: ' ابن قناعاتك الذاتية أولًا!',
            des: 'ارتقِ بصحتك ولياقتك إلى مستوى آخر من خلال تغيير طريقة تفكيرك. يبدأ الشعور بالرضا الجسدي في العقل .مع الممارسات النفسية لـ Feva Fit ، تكتسب القوة العقلية والقدرة على تغيير مزاجك وجسمك في نفس الوقت.',
            ActionBtn1: 'جرب نموذجنا الأولى!',
            ActionBtn2: 'تعلم المزيد',
        },
        survey: {
            title: 'بعض الأسئلة من',
            ques: [
                {
                    num: '01',
                    que: 'هل سبق لك الانضمام إلى الصالة الرياضي ولكنك توقفت عن الذهاب بعد بضعة أسابيع؟',
                    btn1: 'نعم',
                    btn2: 'لا',
                },
                {
                    num: '02',
                    que: 'هل سبق لك أن حددت هدفًا متعلقًا باللياقة البدنية،أو اشتريت ملابس رياضية أو كنت متحمسًا للحصول على اللياقة البدنية؟',
                    btn1: 'نعم',
                    btn2: 'لا',
                },
                {
                    num: '03',
                    que: 'برأيك ، ما منعك من تحقيق أهدافك في مجال الرياضية؟',
                    btn1: 'نعم',
                    btn2: 'لا',
                }
            ],
            title2: 'برأيك ، ما منعك من تحقيق أهدافك في مجال الرياضية؟',
            title3: 'ربما حاولت أن تصبح رياضياً في الماض، لكن ذلك لم ينجح بسبب الافتقار إلى الدافع المطلوب',
        },
        feature: {
            title: 'قائمة الميزات',
            card1: {
                title: 'الهندسة السلوكية',
                des: 'يوفر Feva Fit مجموعة من المحفزات السلوكية لتعزيز العادات الجيدة ومساعدتك على بناء المرونة التي تحتاجها لتحقيق أهدافك الرياضية والجسدية.'
            },
            card2: {
                title: 'رحلات التنويم',
                des: 'انضم إلى التحول. من خلال رحلات التنويم المغناطيسي القوية والقصيرة التي ستساعدك على تحقيق نتائج حقيقية والبقاء متسقًا مع التدريبات الخاصة بك. امنحنا 10 دقائق يوميًا لمدة 21 يومًا ، وشاهد مدى سهولة الحصول على الجسم الذي تتمناه.'
            },
            card3: {
                title: 'مدونة الإلهام',
                des: 'سجل ، شارك وألهم الآخرين في رحلة إنقاص الوزن. احتفظ بسجل لأهدافك اليومية واستعد للوصول إلى أهدافك.'
            },
        },
        programs: {
            title: 'برامجنا الرئيسية',
            slider: [
                {
                    title: '3 Weeks Program',
                    des: '30 daily workout videos',
                    img: cardImg1,
                },
                {
                    title: '3 أسابيع برنامج التحول',
                    des: '30 daily workout videos',
                    img: cardImg2,
                },
                {
                    title: '12 Weeks Program',
                    des: '30 daily workout videos',
                    img: cardImg3,
                }
            ],
            popovr: 'اخسر الوزن الزائد وابني جسمًا قويًا وصحيًا في أقل من 30 دقيقة يوميًا. تم تصميم هذه التدريبات القصيرة والفعالة على أساس أحدث تقنيات التدريب البدني، وذلك لتحسين اللياقة البدنية الخاصة بك في اسرع وقت!'
        },
        download: {
            subtitle: 'العقل قبل الجسد',
            title: 'جرب النموذج الأولي الخاص بنا الآن!',
            des: 'اليوم هو اليوم الذي تبدأ فيه عيش حياة أكثر رشاقة وصحة. اجعل Feva Fit دليلك في هذه الرحلة.'
        }
    }
    return {
        eng,
        arb
    }
}

export default UseContent;