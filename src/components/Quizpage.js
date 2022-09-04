import React  from 'react'
import './Quizpage.css'
import {decode} from 'html-entities'
import Answers from './Answers'
import arrayShuffle from 'array-shuffle'


export default function Quizpage({ allQuiz }) {
    
    const data = allQuiz.map(quiz => {
        return {
            question: quiz.question,
            id: quiz.id,
            key: quiz.id,
            answers: arrayShuffle(quiz.answers),
            correct_answer: quiz.correct_answer
        }
    })

    // const [questionState, setQuestionState] = useState(data)

   

    const questions = data.map(question => {
        return (
            <div className='question--tab' key={question.id}>
                    <h4>{decode(question.question)}</h4>
                    <Answers 
                        answers={question.answers} 
                    />
                    <hr></hr>
                </div>
        )
    })

    return (
        <div className='question--section'>
            <div className='question--container'>
                {questions}
            </div>
            <button className='question--button'>Check answers</button>
        </div>

    )
}
