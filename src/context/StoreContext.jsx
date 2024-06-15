import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {

    const [cartItem, setCartItem]=useState({});
    const addToCart=(itemId,itemCount,name)=>{
    
         setCartItem((prev)=>({[itemId]:itemCount,"name":name}))
        
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])
  

    const createContext={
        food_list,
        cartItem,
        setCartItem,
        addToCart
    }
  return (
    <StoreContext.Provider value={createContext}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };