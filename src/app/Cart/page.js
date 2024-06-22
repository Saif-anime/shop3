'use client'
import React, { useContext } from 'react'
import Cart_Card from '../Components/Cart_Card'
import SummeryCard from '../Components/SummeryCard'
import { CartContext } from '../context/CartContext'
import { ToastContainer } from 'react-toastify';

const Page = () => {

    const { cartData, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);


    let total = 0;
    cartData.map((data) => {
        total += data.Online_price * data.quantity

        // console.log(data.product_price* data.quantity)

    })





    if (cartData.length === 0) {
        return (
            <div className='container m-auto'>
                <div class="bg-gray-100 py-8">
                    <div class="container mx-auto px-4">
                        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
                        <div class="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">


                                OOps Your Cart Empty !

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>

            <div className='container m-auto'>
                <div class="bg-gray-100 py-8">
                    <div class="container mx-auto px-4">
                        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
                        <div class="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">

                                {
                                    cartData.map(item => (
                                        <Cart_Card key={item._id} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} cartItems={item} removeFromCart={removeFromCart} />
                                    ))
                                }



                            </div>

                            <SummeryCard total={total} />
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Page