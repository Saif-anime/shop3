'use client'

import React, { useState, useEffect , useContext} from 'react'

import Link from 'next/link';
import Image from 'next/image';

import { ToastContainer } from 'react-toastify';




const Page = ({ params }) => {
  const [Data, setData] = useState([]);
 


  console.log(Data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_FETCH_URL}/Admin/product/${params.slug}`);
        if (response.ok) {
          const jsonData = await response.json();
          const response_cate = await  fetch(`${process.env.API_FETCH_URL}/Admin/subcategory/${jsonData[0].product_category}`);
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







  return (
    <>


    <div className='container m-auto'>

    

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="logo.png"
            alt="Your Company" width={100} height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="phone"
                  type="phone"
         
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-red-600 hover:text-red-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
 
            <a href="/SignOut" className="font-semibold leading-6 text-red-600 hover:text-red-500">
              Dont Have Account ? 
            </a>
          </p>
        </div>
      </div>




     



      <ToastContainer />
      </div>
    </>
  )
}

export default Page