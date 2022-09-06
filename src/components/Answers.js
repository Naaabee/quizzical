import React, { useState } from 'react'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'


export default function Answers({ answers, questionId, saveSelectedAnswer, isOver, isCorrect }) {

    console.log(isCorrect)

    const answer = answers.map(ans => {
        return {
            id: nanoid(),
            isSelect: false,
            answer: ans
        }
    })

    const [answerState, setAnswerState] = useState(answer)

    // console.log(answerState)

    function handleChange(id, questionId, answer) {
        setAnswerState(answer => {
            return answer.map(ans => {
                return ans.id === id ? {
                    ...ans,
                    isSelect: !ans.isSelect
                } : {
                    ...ans,
                    isSelect: false
                }
            })
        })
        saveSelectedAnswer(questionId, answer)
    }

    function styles(ans) {
        if (isOver && ans.isSelect && isCorrect) {
            return {
                backgroundColor: "#94D7A2",
                border: "0.8px solid #94D7A2"

            }
        } else if (!isOver && ans.isSelect) {
            return {
                backgroundColor: "#D6DBF5",
                border: "0.8px solid #D6DBF5"
            }
        } else {
            return
        }
    }


    const displayAnswer = answerState.map(ans => {
        return (
            <li
                key={ans.id}
                style={styles(ans)}
                onClick={() => handleChange(ans.id, questionId, ans.answer)}
            >
                {decode(ans.answer)}
            </li>
        )
    })



    return (
        <ul className='question--list'>
            {displayAnswer}
        </ul>

    )
}
