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


              <div className='mt-10 flex justify-center'>

                <Link href={`/product/${item._id}`} class="inline items-center justify-center rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300">
                            
                View More
                </Link>
                </div>


              
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