import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer_container'>
      <div className="footer_company">
        <h1>Company</h1>
        <p>About Us</p>
        <p>Term</p>
        <p>Career</p>
        <p>Blog</p>
      </div>
      <div className="footer_legals">
      <h1>Legals</h1>
        <p>Terms & conditions</p>
        <p>Refund & Collections</p>
        <p>Privacy Policy</p>
        <p>Cookies Policy</p>
      </div>
      <div className="footer follow_us">
      <h1>Follow Us</h1>
        <p>Facebook</p>
        <p>Tweeter</p>
        <p>Food Cart</p>
        <input type="email" placeholder='email'/>
        <button>subscribe</button>
      </div>
      
    </div>
  )
}

export default Footer
