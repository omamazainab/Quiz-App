import React, { useState } from 'react';
import { fetchQizQuestions } from './API';
import { QuestionState, Difficulty } from './API'
import Questioncard from './components/Questionard';
import './App.css'

export type answerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [useranswers, setUseranswers] = useState<answerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  console.log(questions)

  const startQuiz = async () => {
    setLoading(true);
    setGameover(false)

    const newQuestions = await fetchQizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions)
    setScore(0);
    setUseranswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      //user answer
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1)
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUseranswers((prev) => [...prev, answerObject ])
      
    }
  }

  const nextQuestion = () => {
    const nextQuestion =number +1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameover(true);
    }else{
      setNumber(nextQuestion)
    }
  }

  return (
    <div>
      <h1>React Quiz</h1>
      {gameover || useranswers.length === TOTAL_QUESTIONS ?
        (
          <button className="start" onClick={startQuiz} >Start</button>
        )
        : null}
      {!gameover ? <p className="score">Score: {score}</p> : null}

      {loading && <p>Loading Questions...</p>}

      {!loading && !gameover && (
        <Questioncard
          questionNo={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={useranswers ? useranswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameover && !loading && useranswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion} >Next</button>
      ) : null}
    </div>
  )
}

export default App
