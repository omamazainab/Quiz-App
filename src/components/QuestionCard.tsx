import React, { useState } from 'react'
import { questionPropsType } from '../Types/quizTypes'

const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {

    let [selectedAns, setSelectedAns] = useState('');

    const handleSelection = (ev:any) => {
        setSelectedAns(ev.target.value)
    }

    return (
        <div>

            <h5>{question}</h5>
            <form onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
                {
                    options.map((opt: string, index: number) => {
                        return (
                            <div key={index}>
                                <label>
                                    <input 
                                    type="radio" 
                                    name="opt" 
                                    required
                                    checked={selectedAns === opt}
                                    value={opt} 
                                    onChange={handleSelection}
                                    />
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
