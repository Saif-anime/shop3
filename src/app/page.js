'use client'
import React, {useContext, useState, useEffect} from 'react';
import CustomCarausel from './Components/CustomCarausel';
import CustomSlider from './Components/CustomSlider';
import {CartContext } from "./context/CartContext";
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';



const Page = () => {

  const {addToCart} = useContext(CartContext)
  const [Data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, [])



    // fetching data here 
  
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_FETCH_URL}/Admin/Categories`);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('Failed to fetch data')
        }
  
      } catch (error) {
        console.log(error)
      }
    }



  return (
    <>

    <div className='container m-auto'>

    
      <div className='container'>
        <div className='container'>
          <CustomCarausel />
        </div>

















{
  Data.map(item =>(
    <section className="text-gray-600 body-font" key={item._id}>
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Best {item.title}</h1>

            </div>

            <section className="text-gray-600 body-font">
              <div className="container px-5  mx-auto">
                <CustomSlider addToCart={addToCart} cateid={item._id}/>

              </div>
{/* 
              <Link href={`/product/${item._id}`}
                className="flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                View More
              </Link> */}
            </section>

          </div>
        </section>
  ))
}


        {/* product here  */}
    

       





      </div>

      <ToastContainer />
      </div>
    </>
  )
}

export default Page