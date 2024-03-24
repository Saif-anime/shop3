'use client'
import React, { useContext } from 'react'
import Cart_Card from '../Components/Cart_Card'
import SummeryCard from '../Components/SummeryCard'
import { CartContext } from '../context/CartContext'

const Page = () => {

    const {cartItems} = useContext(CartContext);
    if (cartItems.length === 0) {
        return (
            <div className='container'>
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

            <div className='container'>
                <div class="bg-gray-100 py-8">
                    <div class="container mx-auto px-4">
                        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
                        <div class="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">

                                {
                                    cartItems.map(item => (
                                        <Cart_Card key={item._id} cartItems={item}/>
                                    ))
                                }
                               
                                

                            </div>

                            <SummeryCard />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page