import React from 'react'
import Navbar from './component/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Review from './pages/Review/Review'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Cart/>} />
        <Route path='/' element={<Review/>} />
      </Routes>
    </div>
  )
}

export default App
