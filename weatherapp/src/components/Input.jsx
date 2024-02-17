import React from 'react'

function Input(props) {
  return (
    <div>

        <input className='input' 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
         />
    </div>
  )
}

export default Input