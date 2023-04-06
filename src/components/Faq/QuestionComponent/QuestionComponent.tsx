import { FaChevronDown } from 'react-icons/fa';

import './QuestionComponent.scss';

export type QuestionComponentProps = {
    questionId: string;
    question: string;
    answer: string;
    classQuestion: string;
    classAnswer: string;
    onClick: (id: string) => void;
};

const QuestionComponent = ({
    questionId,
    question,
    answer,
    classQuestion,
    classAnswer,
    onClick
}: QuestionComponentProps) => (

    <div className='faq-box'>
        <div
            id={questionId} 
            onClick={() => onClick(questionId)}
            className={`faq-box__question ${classQuestion}`}
        >
            <p>{question}</p>
            <FaChevronDown className='faq-box__question__icon'/>
        </div>
        <div
            id={questionId}
            onClick={() => onClick(questionId)}
            className={`faq-box__answer ${classAnswer}`}
        >
            {answer}
        </div>
    </div>

);

export default QuestionComponent;

