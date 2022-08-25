import React from 'react'
import { quiz } from '../quizDatabase'

export default function Quizpage(props) {

    const quizzes = quiz.results
    const questions = quizzes.map(quiz => {
        return (
            <>
                <h4>{quiz.question}</h4>
                <ul>
                    <li>{quiz.correct_answer}</li>
                    <li>1</li>
                    <li>3</li>
                    <li>5</li>
                </ul>
            </>
        )
    })

    // For answers can create an empty array, 



    return (
        <>

            <div>
                {questions}
            </div>

        </>

    )
}
