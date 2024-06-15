import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import Cart from '../../pages/Cart/Cart';

function FoodItem({id,name,image,price,description}) {

    const [itemCount, setItemCount]=useState(1);

    const {carfood_list,cartItem,setCartItem,addToCart}=useContext(StoreContext)

  return (
    <div className='food_item_container'>
        <div className="food_item_img_container">
            <img src={image} alt={name} />
            <div className="food_item_count">
                <img onClick={()=>setItemCount(prev=>prev+1)}  src={assets.add_icon_green} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
            </div>
        </div>
        <div className="food_item_info">
            <p id='food_item_info_name'>{name}</p>
            <p>Price:${price}</p>
            <p>{description}</p>
        </div>

        <div className="food_item_button">
            <button onClick={() => addToCart(id, itemCount,name)} id='add_to_cart_button'>Add To Cart</button>
            <Link to="/cart">
          <button id='go_to_cart_button'>Go to Cart</button>
        </Link>
        </div>
    </div>
  )
}

export default FoodItem
