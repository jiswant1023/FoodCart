import React, { useState } from "react";
import './Home.css'
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay";
import Footer from "../../component/Footer/Footer";


function Home() {

  
  return (
    <div>
      <Header/>
      <ExploreMenu/>
      <FoodDisplay />
      
    </div>
  )
}

export default Home
