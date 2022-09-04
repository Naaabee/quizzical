import React, { useState } from 'react'
import {decode} from 'html-entities'

import { nanoid } from 'nanoid'

export default function Answers({answers}) {

    const answer = answers.map(ans => {
        return {
            id: nanoid(),
            isSelect: false,
            answer: ans
        }
    })

    const [answerState, setAnswerState] = useState(answer)

    // console.log(answerState)

    function handleChange(id, answer) {
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
    }

    function styles(ans) {
        if (ans.isSelect === true) {
            return {
                backgroundColor: "#D6DBF5",
                border: "0.8px solid #D6DBF5"
            } 
        } else {
            return 
        }
    }


        const displayAnswer = answerState.map(ans => {
        // console.log(ans)
        return (
        <li
            key={ans.id}
            style={styles(ans)}
            onClick={() => handleChange(ans.id, ans.answer)}
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
