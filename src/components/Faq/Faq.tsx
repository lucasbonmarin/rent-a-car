import { useState } from 'react';
import QuestionComponent from './QuestionComponent/QuestionComponent';
import './Faq.scss';

export type FaqQuestionType = {
    id: string;
    question: string;
    answer: string
};

const questions: FaqQuestionType[] = [
    {
        id: '1',
        question: '1. What is special about comparing rental car deals ?',
        answer: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different car rental companies.'
    },
    {
        id: '2',
        question: '2. How do I find the car rental deals ?',
        answer: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.'
    },
    {
        id: '3',
        question: '3. How do I find such low rental car prices ?',
        answer: 'Book in advance : booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies : use websites like Kayak, Expedia or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.'
    }
]

const Faq = () => {

    const [activeQuestion, setActiveQuestion] = useState<string>('1');

    const openQuestion = (id: string) => {
        setActiveQuestion(activeQuestion === id ? "" : id);
    };

    const getClassAnswer = (id: string) => (
        activeQuestion === id ? "active-answer" : ""
    );

    const getClassQuestion = (id: string) => (
        activeQuestion === id ? "active-question" : ""
    );

    return (
        <>
            <section className='faq-section'>
                <div className='container'>
                    <div className='faq-content'>
                        <div className='faq-content__title'>
                            <h5>FAQ</h5>
                            <h2>Frequently Asked Questions</h2>
                            <p>
                                Frequently Asked Questions about the car rental booking process 
                                on our website : answers to common concerns and inquiries.
                            </p>
                        </div>

                        <div className='all-questions'>
                            {questions.map(question => (
                                <QuestionComponent
                                    questionId={question.id}
                                    question={question.question}
                                    answer={question.answer}
                                    classQuestion={getClassQuestion(question.id)}
                                    classAnswer={getClassAnswer(question.id)}
                                    onClick={openQuestion}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Faq;