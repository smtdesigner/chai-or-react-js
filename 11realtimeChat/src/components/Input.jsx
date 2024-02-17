import React from 'react'
import Img from '../assets/img.png'
import Attach from '../assets/attach.png'
function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type somthing...'/>
      <div className="send">
        <img src={Img} alt="" />
        <input type="file"  style={{display:"none"}} id='file'/>
        <label htmlFor="file">
        <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input