import { Quiz } from '../Types/quizTypes'

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export async function getQuizDetails(totalQuestions: number, level: string): Promise<Quiz[]> {
    const data = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=18&difficulty=${level}&type=multiple`)
    let { results } = await data.json();
    const quiz = results.map((questionObj: Quiz, ind: number) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers
                .concat(questionObj.correct_answer))
        }
    })
    return quiz;
    // return results;
}