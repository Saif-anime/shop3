// context/CartContext.js
'use client';
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [subCateData, setsubCateData] = useState([]);
  const [Data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);



  useEffect(() => {
    fetchData();
    // Fetch cart data when the component mounts
    updateCartData();
  }, [])




  const fetchData = async () => {
    try {

      const sub_response = await fetch(`${process.env.API_FETCH_URL}/Admin/subcategory`);
      const response = await fetch(`${process.env.API_FETCH_URL}/Admin/Categories`);
      if (sub_response.ok && response) {
        const jsonData = await response.json();
        const jsonSubData = await sub_response.json();
        setsubCateData(jsonSubData);
        setData(jsonData);

      } else {
        console.error('Failed to fetch data')
      }

    } catch (error) {
      console.log(error)
    }
  }



  // Function to update cartData whenever localStorage changes
  const updateCartData = () => {
    const storedCartData = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartData(storedCartData);
  };


  const addToCart = (product) => {
    const existingItem = localStorage.getItem('cartItems');
    let updatedCartItems = [];

    if (existingItem) {
      const cartItems = JSON.parse(existingItem);
      const existingItemIndex = cartItems.findIndex(item => item._id === product._id);

      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity++;
        updatedCartItems = cartItems;
        toast.success("Update Exists Cart Successfully !");
      } else {
        updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
        toast.success("Added to Cart Successfully !");
      }
    } else {
      updatedCartItems = [{ ...product, quantity: 1 }];
      
    }

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    updateCartData();
  };






  const removeFromCart = (productId) => {
    const existingItem = localStorage.getItem('cartItems');


    if (existingItem) {
      const cartItems = JSON.parse(existingItem);
      const updatedCartItems = cartItems.filter(item => item._id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      updateCartData();
      toast.success("Remove Item in Cart Successfully !");
    }
  };



  // increament data 

  const incrementQuantity = (productId) => {
    const existingItem = localStorage.getItem('cartItems');

    if (existingItem) {
      const cartItems = JSON.parse(existingItem);
      const existingItemIndex = cartItems.findIndex(item => item._id === productId);

      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity++;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // toast.success("Increase Your Quantity !");
        updateCartData();
      }
    }
  };


  // decreament data 
  const decrementQuantity = (productId) => {
    const existingItem = localStorage.getItem('cartItems');

    if (existingItem) {
      const cartItems = JSON.parse(existingItem);
      const existingItemIndex = cartItems.findIndex(item => item._id === productId);

      if (existingItemIndex !== -1 && cartItems[existingItemIndex].quantity > 1) {
        cartItems[existingItemIndex].quantity--;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // toast.success("Decrease Your Quantity !");
        updateCartData();
      }
    }
  };






  return (
    <CartContext.Provider value={{cartData, incrementQuantity, decrementQuantity, addToCart, removeFromCart, subCateData, Data }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
