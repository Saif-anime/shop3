'use client'
import React, { useState, useEffect } from 'react'
import AdminNavbar from '../../Components/AdminNavbar';

import Image from 'next/image';








const Page = () => {


  // data come 
  const [open, setOpen] = React.useState(false);
  // const [openedit, setOpenedit] = useState(false);

  const [selectedFile, setSeletedFile] = useState(null);
  const [bannertitle, setbannertitle] = useState('');
  const [bannerLink, setbannerLink] = useState('');

  const [Data, setData] = useState([]);
  // const [SingleData, setSingleData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenEdit = () => {
    // setOpenedit(true)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseEdit = (id) => {
    setOpenedit(false);

  }



  // // conect to db 

  // const singlefetchData = async (id) => {
  //   try {
  //     const response = await fetch(`localhost:3001/Admin/Banner/${id}`);
  //     if (response.ok) {
  //       const jsonData = await response.json();
        
       

  //     } else {
  //       console.error('Failed to fetch data')
  //     }

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  useEffect(() => {
    fetchData();
  }, [])


  // fetching data here 

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.API_FETCH_URL}/Admin/Banner`);
      console.log(process.env.API_FETCH_URL)
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


  const handleFileChange = (event) => {
    setSeletedFile(event.target.files[0]);

  };



  const handleSubmit = async (event) => {


    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', bannertitle);
    formData.append('bannerLink', bannerLink);


    try {
      console.log(process.env.API_FETCH_URL)
      const response = await fetch(`${process.env.API_FETCH_URL}/Admin/Banner`, {
        method: 'POST',
        body: formData
      })
      console.log('handleSubmit');
    } catch (error) {
      console.log('Error uploading file', error);
    }
  }
  return (
    <>

<div className='container'>
        <div
          id="view"
          class="h-full shadow flex flex-row"
          x-data="{ sidenav: true }"
        >
          <button
            // @click="sidenav = true"
            class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
          >
            <svg
              class="w-5 h-5 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>



          <AdminNavbar />

          <div>helo world</div>

        </div>


      </div>




    </>
  )
}

export default Page;