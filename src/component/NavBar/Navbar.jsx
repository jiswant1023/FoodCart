import React, { useState } from 'react'

import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const [menu, setMenu]=useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo'/>
      <ul className='navbar-menu'>
        <li onClick={()=>{setMenu("Home")}} className={menu==="Home"?"active":""}><Link to="/home">Home</Link></li>
        <li onClick={()=>{setMenu("Review")}} className={menu==="Review"?"active":""}><Link to="/review">Review</Link></li>

        

        <Link to="/cart" >
        <li className={location.pathname === "/cart" ? "active" : ""} onClick={()=>{setMenu("Cart")}} >Cart</li>
        </Link>
      </ul>

      <div className='navbar-right'>
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </div>
  )
}

export default Navbar
