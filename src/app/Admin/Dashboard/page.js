'use client'
import React, { useState, useEffect } from 'react'
import Sidebar from '../../Components/Sidebar';
import AdminNavbar from '../../Components/AdminNavbar';





const Page = () => {
  const [selectedFile, setSeletedFile] = useState(null);
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])


  // fetching data here 

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/Admin/Banner');
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
    console.log('handleFile');

  };



  const handleSubmit = async (event) => {


    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:3001/Admin/Banner', {
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

          

        </div>


      </div>

    </>
  )
}

export default Page