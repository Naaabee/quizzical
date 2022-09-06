import React , {useState} from 'react'
import './Quizpage.css'
import {decode} from 'html-entities'
import Answers from './Answers'
import arrayShuffle from 'array-shuffle'


export default function Quizpage({ allQuiz, game, endGame }) {
    
    const data = allQuiz.map(quiz => {
        return {
            question: quiz.question,
            id: quiz.id,
            // key: quiz.id,
            answers: arrayShuffle(quiz.answers),
            correct_answer: quiz.correct_answer,
            userAnswer: '',
            isCorrect: false
        }
    })

    const [questionState, setQuestionState] = useState(data)

    function saveSelectedAnswer(questionId, answer) {
        setQuestionState(allQuiz => {
            return allQuiz.map(quiz => {
                return quiz.id === questionId ? {
                    ...quiz,
                    userAnswer: answer
                } : quiz
            })
        })
    } 

    //check correct answer
    // 1. check if userAnswer = correct_answer
    // 2. if yes, set isCorrect to true and change color to green
    // 3. if no, set isCorrect to false and change color to red

    function checkCorrectAnswer() {
        questionState.map(question => {
            endGame()
             if (question.userAnswer === question.correct_answer) {
               return question.isCorrect = true
            } else {
               return question.isCorrect = false
            }
        })
        // console.log(questionState)
    }


    const questions = questionState.map(question => {
        return (
            <div className='question--tab' key={question.id}>
                    <h4>{decode(question.question)}</h4>
                    <Answers 
                        answers={question.answers} 
                        questionId={question.id}
                        saveSelectedAnswer={saveSelectedAnswer}
                        isOver={game.isOver}
                        isCorrect={question.isCorrect}
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
            <button className='question--button' onClick={checkCorrectAnswer}>Check answers</button>
        </div>

    )
}
