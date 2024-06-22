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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

        



            <div className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link href='/' className="flex title-font font-medium items-center text-gray-900 mr-2 mb-4 md:mb-0">


                                <Image src='/logo.png' height={"100"} width={"100"} alt='logo' />
                            </Link>

                        </div>

                        <div className="hidden md:flex md:flex-1 md:gap-x-3 md:items-center">
                            <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-red-500 py-2 px-4 text-white hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="text-sm font-medium">Categories</span>
                            </div>

                            <input type="text" className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" placeholder="Search" />
                        </div>

                        <div className="flex md:hidden">
                            <button onClick={toggleMenu}>
                                {isOpen ? (
                                    <CloseIcon fontSize="small" />
                                ) : (
                                    <MenuIcon fontSize="small" />
                                )}
                            </button>
                        </div>

                        <div className="hidden md:flex md:items-center">
                          

                            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Favorites</span>
                            </div>

                            <Link href="/Cart">
                            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cartData.length}</span>
                                </div>
                                <span className="text-sm font-medium">Cart</span>
                            </div>
                            </Link>
                            <Link href="/OTP">
                            <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                                <span className="text-sm font-medium">Sign in</span>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col gap-y-4 mt-4">
                            <input type="text" className="rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" placeholder="Search" />
                            <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-red-500 py-2 px-4 text-white hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="text-sm font-medium">Categories</span>
                            </div>
                           
                            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium">Favorites</span>
                            </div>
                            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cartData.length}</span>
                                </div>
                                <span className="text-sm font-medium">Cart</span>
                            </div>
                            <Link href="/OTP">
                                <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                                    <span className="text-sm font-medium">Sign in</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-x-2 py-1 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">California</span>
                        </div>

                        <div className="flex gap-x-8">

                            {
                                Data.map(item => (
                                    // <div class="dropdown inline-block relative" key={item._id}>
                                    //     <button class=" font-semibold py-2 px-4 rounded inline-flex items-center">
                                    //         <span class="mr-1">{item.title}</span>
                                    //         <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    //     </button>
                                    //     <ul class="dropdown-menu absolute hidden  text-gray-700 pt-1" style={{ "width": "15rem", "right": "-4rem" }}>

                                    //         {
                                    //             subCateData.filter(subCate => subCate.category === item._id).map(subCate => (
                                    //                 <li class="" key={item._id}><a class="rounded-t bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="/product">{subCate.title}</a></li>
                                    //             ))}

                                    //     </ul>
                                    // </div>

                                    <span key={item._id} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">{item.title}</span>
                                ))
                            }

                        </div>


                    </div>
                </div>
            </div>








{/* 
            <Disclosure as="header" className="sticky top-0 bg-white shadow-lg z-50">
                {({ open }) => (
                    <>
                        <div className="container mx-auto px-5 py-4 flex justify-between items-center">


                            {/* Hamburger icon for mobile */}
                            {/* <div className="block md:hidden">
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

                            <nav
                                className="hidden md:flex md:items-center md:space-x-4"
                            >

                                {
                                    Data.map(item => (
                                        <div class="dropdown inline-block relative" key={item._id}>
                                            <button class=" font-semibold py-2 px-4 rounded inline-flex items-center">
                                                <span class="mr-1">{item.title}</span>
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                            </button>
                                            <ul class="dropdown-menu absolute hidden  text-gray-700 pt-1" style={{ "width": "15rem", "right": "-4rem" }}>

                                                {
                                                    subCateData.filter(subCate => subCate.category === item._id).map(subCate => (
                                                        <li class="" key={item._id}><a class="rounded-t bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="/product">{subCate.title}</a></li>
                                                    ))}

                                            </ul>
                                        </div>

                                    ))
                                }


                            </nav> */}

                            {/* Cart and Login icons */}
                            {/* <div className="flex items-center space-x-4">
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
            </Disclosure> */} 



        </>
    )
}

export default Navbar