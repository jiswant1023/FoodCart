import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore_menu'>
      <h2>What would you like to order</h2>
      <div className='explore-menu-food'>
        {
            menu_list.map( (item,index) => {
                return(
                    <div key={index} className='explore-menu-food-items'>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
