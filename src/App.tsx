import React from 'react'
import Questioncard from './components/Questionard'

const App = () => {

  const startQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div>
      <h1>React Quiz</h1>
      <button className="start" onClick={startQuiz} >Start</button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      <Questioncard />
      <button className="next" onClick={nextQuestion} >Next</button>
    </div>
  )
}

export default App
