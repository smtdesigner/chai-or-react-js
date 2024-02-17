import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">Smt chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Sumit</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar