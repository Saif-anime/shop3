'use client'
import React, { useState, useEffect } from 'react'
import AdminNavbar from '../../Components/AdminNavbar';
import Sidebar from '../../Components/Sidebar';








const Page = () => {
  // data come 
  const [open, setOpen] = React.useState(false);
  // const [openedit, setOpenedit] = useState(false);

  const [selectedFile, setSeletedFile] = useState(null);
  const [FormProductData, setFormProductData] = useState({
    product_name: "",
    price: "",
    gender: "",
    category: "",
    product_desc: "",
    color: "",
    quantity: "",
    size: ""

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


      <div className='container w-full'>
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

          <div>
            {/* <Sidebar/> */}

            {/* <!-- component --> */}
            <div class="min-h-screen p-6 bg-gray-200 flex items-center justify-center">
              <div class="container max-w-screen-lg mx-auto">
                <div>
                  <h2 class="font-semibold text-xl mb-6 text-gray-600">Add Product Form</h2>
                
                  <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div class="text-gray-600">
                        <p class="font-medium text-lg">Product Details</p>
                        <p>Please fill out all the fields.</p>
                      </div>

                      <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div class="md:col-span-5">
                            <label for="full_name">Full Name</label>
                            <input type="text" name="full_name" id="full_name" class="h-10 border-2 border-red-500 mt-1 rounded px-4 w-full bg-gray-50" value="" />
                          </div>

                          <div class="md:col-span-5">
                            <label for="email">Email Address</label>
                            <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                          </div>

                          <div class="md:col-span-3">
                            <label for="address">Address / Street</label>
                            <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                          </div>

                          <div class="md:col-span-2">
                            <label for="city">City</label>
                            <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                          </div>

                    

                          <div class="md:col-span-2">
                            <label for="state">State / province</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                              <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </button>
                              <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                              </button>
                            </div>
                          </div>

                          <div class="md:col-span-1">
                            <label for="zipcode">Zipcode</label>
                            <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                          </div>

                        
                     

                          <div class="md:col-span-5 text-right">
                            <div class="inline-flex items-end">
                              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Add product</button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right">
                  {/* <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" /> */}
                </a>
              </div>
            </div>
          </div>

        </div>


      </div>








    </>
  )
}

export default Page