'use client'

import React, { useState, useEffect, useContext } from 'react'
import CustomSlider from '../../Components/CustomSlider';
import Link from 'next/link';
import Image from 'next/image';
import { CartContext } from '../../context/CartContext';
import { ToastContainer } from 'react-toastify';




const Page = ({ params }) => {
  const [Data, setData] = useState([]);
  const { addToCart } = useContext(CartContext)




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_FETCH_URL}/Admin/product/${params.slug}`);
        if (response.ok) {
          const jsonData = await response.json();
          const response_cate = await fetch(`${process.env.API_FETCH_URL}/Admin/subcategory/${jsonData[0].product_category}`);
          const jsonCateData = await response_cate.json();
          setData(jsonData);
          console.log(jsonCateData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params]);

  const [selectedImage, setSelectedImage] = useState('/images/JHxMnVrtPMdcNU1s_7g7f.png');

  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };





  return (
    <>

      {
        Data.map(item => (
          <>
            <section className="py-12 sm:py-16" key={item._id}>
              <div className="container mx-auto px-4">
                <nav className="flex">
                  <ol role="list" className="flex items-center">
                    <li className="text-left">
                      <div className="-m-1">
                        <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
                      </div>
                    </li>

                    <li className="text-left">
                      <div className="flex items-center">
                        <span className="mx-2 text-gray-400">/</span>
                        <div className="-m-1">
                          <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </a>
                        </div>
                      </div>
                    </li>

                    <li className="text-left">
                      <div className="flex items-center">
                        <span className="mx-2 text-gray-400">/</span>
                        <div className="-m-1">
                          <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> {item.product_name} </a>
                        </div>
                      </div>
                    </li>
                  </ol>
                </nav>

                <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                  <div className="lg:col-span-3 lg:row-end-1">
                    <div className="lg:flex lg:items-start">
                      <div className="lg:order-2 lg:ml-5">
                        <div className="max-w-xl overflow-hidden rounded-lg">
                          <Image width={1000} height={1000} className="h-full w-full max-w-full object-cover" src={selectedImage} alt="" />
                        </div>
                      </div>

                      <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                        <div className="flex flex-row items-start lg:flex-col">
                          {/* Replace with your actual thumbnail images */}


                          {
                            item.product_Img.map(imgItem => {

                              return (<>

                                <button key={imgItem.product_Img} type="button" onClick={() => handleThumbnailClick(imgItem.product_Img)} className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                                  <Image className="h-full w-full object-cover" width={100} height={100} src={imgItem.product_Img} alt="" />
                                </button>


                              </>
                              )
                            })
                          }


                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <h1 className="sm:text-2xl font-bold text-gray-900">{item.product_name}</h1>

                    <div className="mt-5 flex items-center">
                      <div className="flex items-center">
                        <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                        </svg>
                        <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                        </svg>
                        <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                        </svg>
                        <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                        </svg>
                        <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                        </svg>
                      </div>
                      <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
                    </div>

                    <h2 className="mt-8 text-base text-gray-900">Size</h2>
                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                      <label className="">
                        <input type="radio" name="type" value="Powder" className="peer sr-only" defaultChecked />
                        <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">XXL</p>
                      </label>
                      <label className="">
                        <input type="radio" name="type" value="Whole Bean" className="peer sr-only" />
                        <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">M</p>
                      </label>
                      <label className="">
                        <input type="radio" name="type" value="Ground" className="peer sr-only" />
                        <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">L</p>
                      </label>
                    </div>

                    <h2 className="mt-8 text-base text-gray-900">Choose Colour</h2>
                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                      <label className="">
                        <input type="radio" name="subscription" value="4 Months" className="peer sr-only" />
                        <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Red</p>
                        <span className="mt-1 block text-center text-xs">Red</span>
                      </label>
                      <label className="">
                        <input type="radio" name="subscription" value="8 Months" className="peer sr-only" defaultChecked />
                        <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Green</p>
                        <span className="mt-1 block text-center text-xs">Green</span>
                      </label>
                      <label className="">
                        <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
                        <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Purple</p>
                        <span className="mt-1 block text-center text-xs">Purple</span>
                      </label>
                    </div>

                    <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                      <div className="flex items-end">
                        <h1 className="text-3xl font-bold">{item.Online_price}</h1>
                        <span className="text-base">₹</span>
                      </div>

                      <button type="button" onClick={() => addToCart(item)} className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-red-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-red-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Add to cart
                      </button>
                    </div>

                    <ul className="mt-8 space-y-2">
                      <li className="flex items-center text-left text-sm font-medium text-gray-600">
                        <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                        </svg>
                        Free shipping worldwide
                      </li>

                      <li className="flex items-center text-left text-sm font-medium text-gray-600">
                        <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                        </svg>
                        Cancel Anytime
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="border-b border-gray-300">
                      <nav className="flex gap-4">
                        <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>
                      </nav>
                    </div>

                    <div className="mt-8 flow-root sm:mt-12">
                    {item.product_desc}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ToastContainer />

            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Releted Product</h1>

                </div>

                <section className="text-gray-600 body-font">
                  <div className="container px-5  mx-auto">
                    <CustomSlider addToCart={addToCart} cateid={item.product_category} />

                  </div>
                </section>

              </div>
            </section>
          </>
        ))
      }

      {/* <div className='container m-auto'>

        {
          Data.map(item => (
            <section className="text-gray-600 body-font overflow-hidden" key={item._id}>
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <Image alt="ecommerce" width={100} height={100} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={item.product_Img[0].product_Img} />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{item.product_name}</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.product_name}</h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">4 Reviews</span>
                      </span>
                      <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        <a className="text-gray-500">
                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="text-gray-500">
                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="text-gray-500">
                          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                    <p className="leading-relaxed">{item.product_desc}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <div className="flex">
                        <span className="mr-3">Color</span>
                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      </div>
                      <div className="flex ml-6 items-center">
                        <span className="mr-3">Size</span>
                        <div className="relative">
                          <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                            <option>SM</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">${item.Online_price}</span>
                      <a onClick={() => addToCart(item)}
                        className="text-white ml-6 cursor-pointer bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Add
                        to cart</a>

                    </div>
                  </div>
                </div>
              </div>
            </section>


          ))
        }






        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Releted Product</h1>

            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto">
                <CustomSlider addToCart={addToCart} />

              </div>
            </section>

          </div>
        </section>




        <ToastContainer />
      </div> */}
    </>
  )
}

export default Page