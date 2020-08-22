import React from 'react'
import { answerObject } from '../App'

interface Props {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: answerObject | undefined;
    questionNo: number;
    totalQuestions: number;
}

const Questionard: React.FC<Props> = ({ question,
    answers,
    callback,
    userAnswer,
    questionNo,
    totalQuestions
}) => {
    return (
        <div className="questionCard">
            <p className="number">
                Question : {questionNo} / {totalQuestions}
            </p>
            <p className="question" dangerouslySetInnerHTML={{ __html: question }}>

            </p>

            <div>
                {answers.map(answer => (
                    <div key={answer} >
                        <button className="answer-btn" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Questionard
