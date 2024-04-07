"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footers from "./Components/Footers";
import Spinner from "./Components/Spinner";
import { CartProvider } from "./context/CartContext";
import { useEffect, useState } from "react";
import Head from "next/head";




const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);





  return (

    <CartProvider>
      <html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/spinn.png" />
          {/* <!-- Google Fonts --> */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

          {/* <!-- Vendor CSS Files --> */}

         

        </Head>
        <body className="">



          {/* Render Navbar only if it's not an admin route */}

          {/* <Spinner/> */}



          {

            Loading ? (
              <Spinner />
            ) : (

              <div>

                <Navbar />



                {children}



                {/* Render Footer only if it's not an admin route */}



                <Footers />

              </div>

            )

          }




        </body>

      </html>
    </CartProvider>
  );
}
