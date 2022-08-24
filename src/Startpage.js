import React from 'react'
import './Startpage.css'

export default function Startpage() {
    return (
        <div className='start--section'>
            <svg className='blob1' width="313" height="351" viewBox="0 0 313 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M99.4095 235.395C71.1213 204.851 33.3179 175.782 37.1728 134.307C41.4394 88.401 75.8541 48.6412 118.419 30.8671C158.797 14.0063 206.035 23.7442 241.822 48.8506C271.947 69.9859 272.823 110.124 282.141 145.729C292.17 184.051 318.521 224.811 296.501 257.779C273.539 292.159 224.991 297.432 183.931 292.768C148.318 288.723 123.751 261.677 99.4095 235.395Z" fill="#FFFAD1" />
            </svg>

            <h1 className='start--title'>Quizzical</h1>
            <h4>Are you better than a monkey ?</h4>
            <button className='start--button'>Start quiz</button>
            {/* <img className="blob2" alt='blob2' src={require("../src/images/blobs1.png")} /> */}
        </div>
    )
}
