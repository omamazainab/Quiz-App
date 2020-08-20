import React from 'react'

interface Props {
    question: String;
    answers: string[];
    callack: any;
    userAnswer: string;
    questionNo: number;
    totalQuestions: number;
}

const Questionard: React.FC<Props> = ({ question,
    answers,
    callack,
    userAnswer, 
    questionNo, 
    totalQuestions 
}) => {
    return (
        <div>
            <p className="number">
                Question : {questionNo} / {totalQuestions}
            </p>

        </div>
    )
}

export default Questionard
