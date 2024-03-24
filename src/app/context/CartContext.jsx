// context/CartContext.js
'use client';
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      const existingItemIndex = cartItems.findIndex(item => item._id === product._id);

      if (existingItemIndex !== -1) {
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingItemIndex].quantity++;
          setCartItems(updatedCartItems);
          toast.success("Update Cart Successfully !");
          
      } else {
        
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
          toast.success("Add to Cart Successfully !");
      }
  };

  console.log(cartItems)



  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item._id !== productId));
    toast.success("Add to Cart Successfully !");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export  {CartContext, CartProvider};
