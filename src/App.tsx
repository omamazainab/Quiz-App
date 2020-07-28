import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/QuizServic'
import { QuestionType } from './Types/quizTypes'
import QuestionCard from './components/QuestionCard'

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentQuestion, setCurrentQuestion] = useState<number>(0)

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(currentQuestion < quiz.length - 1){
      setCurrentQuestion(++currentQuestion)
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
        options={quiz[currentQuestion].option}
        question={quiz[currentQuestion].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
