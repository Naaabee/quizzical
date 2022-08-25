import React, { useEffect, useState } from 'react'
import './Startpage.css'
import { questionList } from './questionList'

export default function Startpage() {

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
            <svg className='blob1' width="313" height="351" viewBox="0 0 313 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M99.4095 235.395C71.1213 204.851 33.3179 175.782 37.1728 134.307C41.4394 88.401 75.8541 48.6412 118.419 30.8671C158.797 14.0063 206.035 23.7442 241.822 48.8506C271.947 69.9859 272.823 110.124 282.141 145.729C292.17 184.051 318.521 224.811 296.501 257.779C273.539 292.159 224.991 297.432 183.931 292.768C148.318 288.723 123.751 261.677 99.4095 235.395Z" fill="#FFFAD1" />
            </svg>
            <div className='start--section'>
                <h1 className='start--title'>Quizzical</h1>
                <h4>{question}</h4>
                <button className='start--button'>Start quiz</button>
            </div>
            <svg className='blob2' width="297" height="235" viewBox="0 0 297 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M143.448 4.90596C184.961 1.77498 231.243 -9.72149 261.306 19.1094C294.581 51.0203 304.282 102.703 291.701 147.081C279.767 189.18 242.745 220.092 200.821 232.476C165.528 242.902 133.567 218.605 99.8993 203.738C63.6625 187.737 15.3588 182.993 3.25932 145.239C-9.35799 105.868 16.7305 64.5881 45.9358 35.3528C71.2672 9.99541 107.727 7.60006 143.448 4.90596Z" fill="#DEEBF8" />
            </svg>

        </>

    )
}
