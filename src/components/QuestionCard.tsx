import React from 'react'
import { questionPropsType } from '../Types/quizTypes'

const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {
    return (
        <div>

            <h5>{question}</h5>
            <form onSubmit={callback}>
                {
                    options.map((opt: string, index: number) => {
                        return (
                            <div key={index}>
                                <label>
                                    <input type="radio" name="opt" value={opt} />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }

                <input type='submit' />
            </form>
        </div>
    )
}

export default QuestionCard
