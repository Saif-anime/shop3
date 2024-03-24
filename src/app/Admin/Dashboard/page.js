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
        <div className='mb-2'>

          <AdminNavbar />
        </div>



      </div>

    </>
  )
}

export default Page