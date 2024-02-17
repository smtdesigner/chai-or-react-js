import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src="https://kinsta.com/wp-content/uploads/2020/04/code-review-tools-1024x512.png" alt=""width={300} style={{border: "2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>

    </div>
  )
}

export default Card