import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h1>Are You Starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <button>View More</button>
      </div>

      <div className='video-container'>
        <img src="https://media.istockphoto.com/id/1223383996/photo/chef-tossing-flaming-vegetable.jpg?s=612x612&w=0&k=20&c=6K9jPlnfL6Rdf16-08RaK6DRfP03wy8pSZviicDpuVQ=" alt="pan" />
      </div>
    </div>
  )
}

export default Header
