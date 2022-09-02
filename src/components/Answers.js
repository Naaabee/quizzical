import React from 'react'
import {decode} from 'html-entities'
import arrayShuffle from 'array-shuffle'

export default function Answers({answers}) {



    const answer = answers.map(ans => {
        return (
        <li 
            id={ans.id}
            key={ans.id}
  
        >
            {decode(ans)}
        </li>
        )
    })
    
    return (
        <ul className='question--list'>
            {arrayShuffle(answer)}
        </ul>

    )
}
