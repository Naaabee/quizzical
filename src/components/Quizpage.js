import React from 'react'
import './Quizpage.css'
import he from 'he'



export default function Quizpage({ question, correct_answer, answers }) {

    const questions = question.map(quest => {
        return quest.question
    })

    console.log(correct_answer)
    console.log(answers)



    return (
        <div className='question--section'>
            <div className='question--container'>
                <div className='question--tab'>
                    <h4>{questions}</h4>
                    <ul className='question--list'>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                    <hr></hr>
                </div>
            </div>
            <button className='question--button'>Check answers</button>
        </div>

    )
}
