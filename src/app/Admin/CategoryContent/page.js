'use client'
import React, { useState, useEffect } from 'react'
import AdminNavbar from '../../Components/AdminNavbar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Image from 'next/image';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});




const Page = () => {
  // data come 
  const [open, setOpen] = React.useState(false);
  // const [openedit, setOpenedit] = useState(false);

  const [selectedFile, setSeletedFile] = useState(null);
  const [bannertitle, setbannertitle] = useState('');
 

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
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_FETCH_URL}/Admin/Categories`);
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

  const handleFileChange = (event) => {
    setSeletedFile(event.target.files[0]);

  };



  const handleSubmit = async (event) => {


    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', bannertitle);
  


    try {
      const response = await fetch(`${process.env.API_FETCH_URL}/Admin/Categories`,{
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



        {/* body here  */}
        <div className='px-20 py-5'>
          {/* modal here  */}
          <div className='container'>

            <Button variant="contained" style={{ backgroundColor: "#1565c0" }} onClick={handleClickOpen}>
              Add Category
            </Button>

            {/* add here  */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Category Add Form"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                      <TextField
                        type="text"
                        variant='outlined'
                        value={bannertitle}
                        onChange={(e) => setbannertitle(e.target.value)}

                        label="Category Title"

                        fullWidth
                        required
                      />
                    
                    </Stack>


                    <Stack sx={{ marginBottom: 4 }}>



                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Category Image Upload
                        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                      </Button>
                    </Stack>

                    <Button variant="contained" style={{ backgroundColor: "#1565c0" }} type="submit">Submit</Button>
                  </form>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>

              </DialogActions>
            </Dialog>


       

          </div>

          <div className='mt-2'>
            {/* table here  */}

            <table class="min-w-full border-collapse block md:table">
              <thead class="block md:table-header-group">
                <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Id</th>
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Category</th>
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Category Image</th>

                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group">


                {

                  Data.map((item, index) => (
                    <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row" key={index}>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">id</span>{index + 1}</td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{item.title}</td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span> <div class="relative inline-block shrink-0 rounded-2xl me-3">
                       <Image src={item.CategoryImg} width={50} height={50} class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                      </div></td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <Button variant="contained" style={{ backgroundColor: "#1b5e20" }} onClick={handleClickOpenEdit(item._id)}>Edit</Button>
                        <Button variant="none" startIcon={<DeleteIcon />} sx={{ marginRight: "10px" }} ></Button>
                      </td>
                    </tr>
                  ))
                }


              </tbody>
            </table>

          </div>
        </div>


      </div>




    </>
  )
}

export default Page