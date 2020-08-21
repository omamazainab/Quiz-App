import React from 'react'

interface Props {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
        <div>
            <p className="number">
                Question : {questionNo} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html : question }}>

            </p>

            <div>
                {answers.map(answer => (
                    <div key={answer} >
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}></span>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Questionard
