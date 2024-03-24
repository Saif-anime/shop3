'use client'
import React, { useContext, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import Dropdown from "./Dropdown";
import { CartContext } from '../context/CartContext';
import Image from 'next/image';



const Navbar = () => {

    const {cartItems} = useContext(CartContext);

    const dropdowns = [
        {
            title: 'Sale',
            items: [
                { label: 'All', href: '/product' },
                { label: 'Flat 40% Off', href: '/product' },
                { label: 'Flat 20% Off', href: '/product' },
            ]
        },
        {
            title: 'Silk Saree',
            items: [
                { label: 'Banarasi Silk', href: '#' },
                { label: 'Bangalore Silk', href: '#' },
                { label: 'Bhagalpuri Silk', href: '#' },
            ]
        },
        {
            title: 'Cotton Saree',
            items: [
                { label: 'Kanchi Cotton', href: '#' },
                { label: 'Coimbatore Cotton', href: '#' },
                { label: 'Bengal Cotton', href: '#' },
            ]
        },
        {
            title: 'Ethnic Wear',
            items: [
                { label: 'Kurtas & Suits ', href: '#' },
                { label: 'Lehenga Cholis', href: '#' },
                { label: 'Dupattas & Shawls', href: '#' },
                { label: 'Dress Materials', href: '#' },
            ]
        }
    ];

    return (
        <>

            <header className="text-gray-600 body-font shadow-lg sticky top-0 bg-white" style={{ zIndex: "999" }}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="font-bold text-red-700 ml-3 text-xl">Shoping</span> */}

                        <Image src='/logo.png' height={"100"} width={"100"} alt='logo'/>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">


                        {dropdowns.map((dropdown, index) => (
                            <Dropdown key={index} title={dropdown.title} items={dropdown.items} />
                        ))}

                    </nav>


                    <Link href="/Cart">

                        <div class="cursor-pointer flex justify-center items-center">
                            <div class="relative py-2">
                                <div class="t-0 absolute left-3">
                                    <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartItems.length}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </header>

        </>
    )
}

export default Navbar