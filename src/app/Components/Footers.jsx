import React from 'react'
import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.css';


const Footers = () => {
  return (
    <>

     


{/* <!-- ======= Footer ======= --> */}

  <footer id="footer">
    <div class="footer-top">
      <div class="container mx-auto sm:px-4">
        <div class="flex flex-wrap ">

          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 footer-contact">
            
          <Image src='/logo.png' width={"200"} height={"200"} alt='logo' />
            <p>
              A/2, Uttara Apartment <br/>
              Kaikhali, Kolkata 700052<br/>
              India <br/><br/>
              <strong>Phone:</strong> +91 7980861161<br/>
              <strong>Email:</strong> info@kojagari.com<br/>
            </p>
          </div>

          <div class="lg:w-1/5 pr-4 pl-4 md:w-1/2 pr-4 pl-4 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Return & Exchanges</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Cancellation</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Track Order</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms & Conditions</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About Us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Our Products</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Blogs</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Delivery Information</a></li>
            </ul>
          </div>

          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Step into a haven of luxurious silks at Kojagari. Explore a captivating collection of sarees, each meticulously crafted with time-honored techniques and adorned with intricate designs. 
              Immerse yourself in the elegance of pure silk, whispering tales of tradition and artistry.</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container mx-auto sm:px-4 md:flex py-4">

      <div class="md:me-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Kojagari</span></strong>. All Rights Reserved
        </div>
      </div>
      <div class="social-links text-center text-md-end pt-3 md:pt-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
  

    </>
  )
}

export default Footers