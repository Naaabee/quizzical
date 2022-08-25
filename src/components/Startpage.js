import React, { useEffect, useState } from 'react'
import './Startpage.css'
import { questionList } from '../questionList'

export default function Startpage(props) {

    const [question, setQuestion] = useState(questionList.list.description[0].text)
    
    useEffect(() => {
        let index = 0
        setInterval(() => {
            if (index === 0) {
                index += 1
                setQuestion(questionList.list.description[index].text)            
            } else if (index === 1) {
                index += 1
                setQuestion(questionList.list.description[index].text)
            } else if (index === 2) {
                index += 1
                setQuestion(questionList.list.description[index].text)
            } else if (index === 3) {
                index += 1
                setQuestion(questionList.list.description[index].text)
            } else if (index === 4) {
                index += 1
                setQuestion(questionList.list.description[index].text)
            } else {
                index = 0
                setQuestion(questionList.list.description[index].text)
            }
        }, 3000)
    }, []) 

    return (
        <>
            <div className='start--section'>
                <h1 className='start--title'>Quizzical</h1>
                <h4>{question}</h4>
                <button onClick={props.handleClick}className='start--button'>Start quiz</button>
            </div>
        </>

    )
}
