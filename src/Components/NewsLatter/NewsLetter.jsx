import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive ofeers on your Email</h1>
      <p>Subscribe to our newletter and stayupdated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter