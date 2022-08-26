import React from 'react'
import { quiz } from '../quizDatabase'
import './Quizpage.css'

export default function Quizpage(props) {

    const quizzes = quiz.results
    const questions = quizzes.map(quiz => {
        return (
            <div className='question--tab'>
                <h4>{quiz.question}</h4>
                <ul className='question--list'>
                    <li>{quiz.correct_answer}</li>
                    <li>1</li>
                    <li>3</li>
                    <li>5</li>
                </ul>
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
