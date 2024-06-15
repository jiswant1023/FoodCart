import React from 'react'
import Navbar from './component/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Review from './pages/Review/Review'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/review' element={<Review/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
