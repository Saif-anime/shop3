'use client'
import React, {useContext} from 'react';
import CustomCarausel from './Components/CustomCarausel';
import CustomSlider from './Components/CustomSlider';
import {CartContext } from "./context/CartContext";
import { ToastContainer } from 'react-toastify';



const Page = () => {

  const {addToCart} = useContext(CartContext)



  return (
    <>
      <div className='container'>
        <div className='container'>
          <CustomCarausel />
        </div>
        {/* product here  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="  sm:text-3xl text-2xl font-medium title-font text-gray-900">Exclusive Deals</h1>

            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto">
                <CustomSlider addToCart={addToCart}/>

              </div>
            </section>

          </div>
        </section>

        {/* product here  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Trending Product</h1>

            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto">
                <CustomSlider addToCart={addToCart}/>

              </div>
            </section>

          </div>
        </section>


        {/* product here  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Best Seller Product</h1>

            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto">
                <CustomSlider addToCart={addToCart}/>

              </div>
            </section>

          </div>
        </section>


        {/* product here  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Trending Product</h1>

            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto">
                <CustomSlider addToCart={addToCart}/>

              </div>
            </section>

          </div>
        </section>


        {/* product here  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Trending Product</h1>

            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto">
                <CustomSlider addToCart={addToCart}/>

              </div>
            </section>

          </div>
        </section>


        {/* product here  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Trending Product</h1>

            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto">
                <CustomSlider addToCart={addToCart}/>

              </div>
            </section>

          </div>
        </section>


      </div>

      <ToastContainer />
    </>
  )
}

export default Page