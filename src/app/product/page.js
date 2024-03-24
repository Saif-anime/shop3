"use client"
import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import Dropdown from '../Components/Dropdown';

const Page = () => {

    const [Data, setData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${process.env.API_FETCH_URL}/Admin/product`);
            if (response.ok) {
              const jsonData = await response.json();
              setData(jsonData);
              console.log(jsonData);
            } else {
              console.error('Failed to fetch data');
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);







    const dropdowns = [
        {
            title: 'Sort',
            items: [
                { label: 'Most Popular', href: '/product' },
                { label: 'Best Rating', href: '/product' },
                { label: 'Price: Low to High', href: '/product' },
            ]
        },

    ];

    return (
        <>

            <div className="bg-white">
                <div>

                    <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">

                        <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                        <div className="fixed inset-0 z-40 flex">

                            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* <!-- Filters --> */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                        <li>
                                            <a href="#" className="block px-2 py-3">Totes</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-2 py-3">Backpacks</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-2 py-3">Travel Bags</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-2 py-3">Hip Bags</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-2 py-3">Laptop Sleeves</a>
                                        </li>
                                    </ul>

                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Color</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-mobile-0">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Category</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-mobile-1">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Size</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-mobile-2">
                                            <div className="space-y-6">
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">2L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500">6L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500">12L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500">18L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500">20L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500">40L</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <main className="max-w-full  px-24 sm:px-6 lg:px-24">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                            <div className="flex items-center">
                                <div className="relative inline-block text-left">

                                    {dropdowns.map((dropdown, index) => (
                                        <Dropdown key={index} title={dropdown.title} items={dropdown.items} />
                                    ))}


                                </div>

                                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                    <span className="sr-only">View grid</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                    <span className="sr-only">Filters</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                {/* <!-- Filters --> */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        <li>
                                            <a href="#">Sale</a>
                                        </li>
                                        <li>
                                            <a href="#">Saree</a>
                                        </li>
                                        <li>
                                            <a href="#">Ethnic Wear</a>
                                        </li>
                                        <li>
                                            <a href="#">Hip Bags</a>
                                        </li>
                                        <li>
                                            <a href="#">Laptop Sleeves</a>
                                        </li>
                                    </ul>

                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Color</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-0">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-0" className="ml-3 text-sm text-gray-600">White</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-1" className="ml-3 text-sm text-gray-600">Beige</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-2" className="ml-3 text-sm text-gray-600">Blue</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-3" className="ml-3 text-sm text-gray-600">Brown</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-4" className="ml-3 text-sm text-gray-600">Green</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-color-5" className="ml-3 text-sm text-gray-600">Purple</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Category</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-1">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-0" className="ml-3 text-sm text-gray-600">New Arrivals</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-1" className="ml-3 text-sm text-gray-600">Sale</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-2" className="ml-3 text-sm text-gray-600">Travel</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-3" className="ml-3 text-sm text-gray-600">Organization</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-4" className="ml-3 text-sm text-gray-600">Accessories</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Size</span>
                                                <span className="ml-6 flex items-center">
                                                    {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div className="pt-6" id="filter-section-2">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-0" className="ml-3 text-sm text-gray-600">2L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-1" className="ml-3 text-sm text-gray-600">6L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-2" className="ml-3 text-sm text-gray-600">12L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-3" className="ml-3 text-sm text-gray-600">18L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-4" className="ml-3 text-sm text-gray-600">20L</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-size-5" className="ml-3 text-sm text-gray-600">40L</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                {/* <!-- Product grid --> */}
                                <div className="lg:col-span-3">
                                    {/* <!-- Your content --> */}

                                    {/* product here  */}
                                    <section className="text-gray-600 body-font">
                                        <div className="container px-5  mx-auto">

                                            <section className="text-gray-600 body-font">
                                                <div className="container px-5  mx-auto">
                                                    <div className="flex flex-wrap -m-4">

                                                        {
                                                            Data.map(item => (
                                                                <div className='lg:w-1/3 md:w-1/2 p-4 w-full' key={item._id}>

                                                                    <Card product={item} />
                                                                </div>



                                                            ))
                                                        }



                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </section>



                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            {/* With centered text and dropdown product filters
Preview

Get the code →

With dropdown product filters
Preview

Get the code →

With expandable product filter panel
Preview

Get the code →

Sidebar filters
Preview

Get the code →

© 2024 Tailwind Labs Inc. All rights reserved.

Privacy policy
Changelog */}








        </>
    )
}

export default Page