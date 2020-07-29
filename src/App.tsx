import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/QuizServic'
import { QuestionType } from './Types/quizTypes'
import QuestionCard from './components/QuestionCard'

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0)
  let [score, setScore] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<EventTarget>, usrAns: string) => {
    e.preventDefault();

    const currentQuestion:QuestionType = quiz[currentQuestionNumber]

    if (usrAns === currentQuestion.answer) {
      setScore(++score)
    }

    if (currentQuestionNumber < quiz.length - 1) {
      setCurrentQuestionNumber(++currentQuestionNumber)
    }else{
      alert(score)
      setCurrentQuestionNumber(0);
      setScore(0)
    }
    
  }

  useEffect(() => {

    async function fetchData() {

      const questions: QuestionType[] = await getQuizDetails(5, 'easy')
      setQuiz(questions)

    }
    fetchData();

  }, []);


  if (!quiz.length) {

    return <h4>Loading...</h4>

  }
  return (
    <div className="App">
      <QuestionCard
        options={quiz[currentQuestionNumber].option}
        question={quiz[currentQuestionNumber].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
