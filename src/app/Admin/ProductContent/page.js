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
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Image from 'next/image';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


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
  const [FormProductData, setFormProductData] = useState({
    product_name:"",
    price:"",
    gender:"",
    category:"",
    product_desc:"",
    color:"",
    quantity:"",
    size:""

  });
 
  const handleChange = (e) => {
    setFormProductData({ ...FormProductData, [e.target.name]: e.target.value });
    console.log("hel")
  };

  const [Data, setData] = useState([]);
  const [CateData, setCateData] = useState([]);

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
      const response = await fetch(`${process.env.API_FETCH_URL}/Admin/product`);
      const cate = await fetch(`${process.env.API_FETCH_URL}/Admin/Categories`)
      if (response.ok && cate.ok) {
        const jsonData = await response.json();
        const cate_json = await cate.json();
        setData(jsonData);
        setCateData(cate_json);

      } else {
        console.error('Failed to fetch data')
      }

    } catch (error) {
      console.log(error)
    }
  }
  // const fetchCategoryName = async (categoryId) => {
  //   try {
  //     const response = await fetch(`http://localhost:3001/Admin/Categories/${categoryId}`);
  //     if (response.ok) {
  //       const categoryData = await response.json();
  //       return categoryData.name; // Assuming category data has a 'name' field
  //     } else {
  //       console.error('Failed to fetch category data');
  //       return 'Unknown Category'; // Return a default value in case of failure
  //     }
  //   } catch (error) {
  //     console.error('Error fetching category data:', error);
  //     return 'Unknown Category'; // Return a default value in case of error
  //   }
  // };
  console.log(Data)

  const handleFileChange = (event) => { 
    setSeletedFile(event.target.files[0]);

  };



  const handleSubmit = async (event) => {


    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('product_name', FormProductData.product_name);
    formData.append('product_price', FormProductData.price);
    formData.append('product_desc', FormProductData.product_desc);
    formData.append('product_size', FormProductData.size);
    formData.append('color', FormProductData.color);
    formData.append('quantity', FormProductData.quantity);
    formData.append('gender', FormProductData.gender);
    formData.append('product_category', FormProductData.category);


    try {
      const response = await fetch(`${process.env.API_FETCH_URL}/Admin/product`, {
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
              Add Product
            </Button>

            {/* add here  */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Product Add Form"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <form onSubmit={handleSubmit} method='post'>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                      <TextField
                        type="text"
                        variant='outlined'
                        name='product_name'
                        value={FormProductData.product_name}
                        onChange={handleChange}
                        
                        label="Product Name"

                        fullWidth
                        required
                      />
                      <TextField
                        type="number"
                        variant='outlined'
                        onChange={handleChange}
                        name='price'
                        value={FormProductData.price}
                        label="Price"
                        fullWidth

                      />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }} >

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={FormProductData.category}
                          label="Category"
                          name='category'
                          onChange={handleChange}
                          required
                        >

                          {

                            CateData.map((item, index) => (
                              <MenuItem key={index} value={item._id}>{item.title}</MenuItem>
                            ))
                          }


                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          value={FormProductData.gender}
                          id="demo-simple-select"
                          onChange={handleChange}
                          label="gender"
                          name='gender'

                        >
                          <MenuItem value="1">Male</MenuItem>
                          <MenuItem value="2">Female</MenuItem>
                          <MenuItem value="3">Other</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Size</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={FormProductData.size}
                          onChange={handleChange}
                          label="Size"
                          name='size'

                        >
                          <MenuItem value='sm'>SM</MenuItem>
                          <MenuItem value='m'>M</MenuItem>
                          <MenuItem value='l'>L</MenuItem>
                          <MenuItem value="xl">XL</MenuItem>
                          <MenuItem value='xxl'>XXL</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>


                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                      <TextField
                        type="text"
                        variant='outlined'
                     
                        onChange={handleChange}
                        value={FormProductData.color}
                        label="Color"
                        name='color'
                        fullWidth
                        required
                      />
                      <TextField
                        type="number"
                        variant='outlined'
                        onChange={handleChange}
                     name='quantity'
                        label="Quantity"
                        fullWidth
                        value={FormProductData.quantity}

                      />
                    </Stack>

                    <TextField
                      type="text"
                      name='product_desc'
                      
                      variant='outlined'
                      onChange={handleChange}
                      value={FormProductData.product_desc}
                      label="Product Description"
                      fullWidth

                    />

                    <Stack sx={{ marginBottom: 4, marginTop: 5 }}>



                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Product Image Upload
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
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Name</th>
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Price</th>
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Category</th>
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Size</th>
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Color</th>
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Gender</th>
                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Image</th>

                  <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group">


                {

                  Data.map((item, index) => (
                    <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row" key={index}>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">id</span>{index + 1}</td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{item.product_name}</td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{item.product_price}</td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{item.product_category}</td>
                      {/* <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span> {item.product_category ? (
                        <span>{fetchCategoryName(item.product_category)}</span>
                      ) : (
                        <span>No Category</span>
                      )}</td> */}
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{item.sizes}</td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{item.colors}</td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{item.gender}</td>
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>
                        <div class="relative inline-block shrink-0 rounded-2xl me-3">

                          <Image src={item.product_Img} width={50} height={50} class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
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