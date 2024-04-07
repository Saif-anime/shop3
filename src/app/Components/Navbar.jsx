'use client'
import React, { useContext, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';
import Image from 'next/image';
import LoginIcon from '@mui/icons-material/Login';
import { Disclosure } from "@headlessui/react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { cartData, subCateData, Data } = useContext(CartContext);



    return (
        <>





            <Disclosure as="header" className="sticky top-0 bg-white shadow-lg z-50">
                {({ open }) => (
                    <>
                        <div className="container mx-auto px-5 py-4 flex justify-between items-center">

                            
                            {/* Hamburger icon for mobile */}
                            <div className="block md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-600 focus:outline-none"
                                >
                                    {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                                </button>
                            </div>


                            <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">


                                <Image src='/logo.png' height={"150"} width={"150"} alt='logo' />
                            </Link>

                            {/* Hamburger icon for mobile
                            <div className="block md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-600 focus:outline-none"
                                >
                                    {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                                </button>
                            </div> */}

                            {/* Navigation links */}
                            <nav
                                className="hidden md:flex md:items-center md:space-x-4"
                            >
                              
                        {
                            Data.map(item => (
                                <div class="dropdown inline-block relative">
                                    <button class=" font-semibold py-2 px-4 rounded inline-flex items-center">
                                        <span class="mr-1">{item.title}</span>
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                    <ul class="dropdown-menu absolute hidden  text-gray-700 pt-1" style={{ "width": "15rem", "right": "-4rem" }}>

                                        {
                                            subCateData.filter(subCate => subCate.category === item._id).map(subCate => (
                                                <li class=""><a class="rounded-t bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="/product">{subCate.title}</a></li>
                                            ))}

                                    </ul>
                                </div>

                            ))
                        }


                            </nav>

                            {/* Cart and Login icons */}
                            <div className="flex items-center space-x-4">
                                <Link href="/Cart">

                                    <div class="cursor-pointer flex justify-center items-center">
                                        <div class="relative py-2">
                                            <div class="t-0 absolute left-3">
                                                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartData.length}</p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>


                                <Link href="/OTP">

                                    <div class="cursor-pointer flex justify-center items-center ml-5">
                                        <div class="relative py-2">

                                            <svg class="h-8 w-8 text-gray-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>

         

        </>
    )
}

export default Navbar