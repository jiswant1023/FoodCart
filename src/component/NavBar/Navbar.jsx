import React, { useState } from 'react'
import NavbarCSS from './Navbar.module.css'
import './navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
   const [menu, setMenu]=useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo'/>
      <ul className='navbar-menu'>
        <li onClick={()=>{setMenu("Home")}} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>{setMenu("Review")}} className={menu==="Review"?"active":""}>Review</li>
        <li onClick={()=>{setMenu("Cart")}} className={menu==="Cart"?"active":""}>Cart</li>
      </ul>

      <div className='navbar-right'>
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </div>
  )
}

export default Navbar
