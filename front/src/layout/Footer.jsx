import React from 'react'
import { FaBox } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdOutlineDownloading } from "react-icons/md";
import LogoMg from "../assets/images/logo.png"
import "../layout/footer.css"

const Footer = () => {
  return (
   <section>
    <div className='IconBox'>
        <div>
            <p><FaBox /></p>
            <h3>Free Shipping Method</h3>
            <p>aorem ixpsacdolor sit <br /> ameasecur adipisicing <br />  elitsf edasd.</p>
        </div>
        <div>
        <p><FaUnlockKeyhole /></p>
        <h3>Secure Payment System</h3>
        <p>aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.</p>
        </div>
        <div>
        <p><MdOutlineDownloading /></p>
        <h3>Secure Payment System</h3>
        <p>aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.</p>
        </div>
    </div>
    <div className='EstoreBox'>
        <div>
            <img src={LogoMg} alt="" />
            <p>Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. <br /> Nulla asperiores blanditiis  ipsa.</p>
        </div>
        <div>
            <h3>Quick Links</h3>
            <a href="">About</a>
            <a href="">Offers Discounts</a>
            <a href="">Get Coupon</a>
            <a href="">Contact Us</a>
        </div>
        <div>
            <h3>New Products</h3>
            <a href="">Woman Cloth</a>
            <a href="">Offers Discounts</a>
            <a href="">Man Accessories</a>
            <a href="">Rubber made Toys</a>
        </div>
        <div>
        <h3>Support</h3>
            <a href="">Woman Cloth</a>
            <a href="">Terms Conditions</a>
            <a href="">Privacy Policy</a>
            <a href="">Porivicy Policy</a>
            <a href="">Report a Payment Isuue</a>
        </div>
    </div>
    <div className='foot'>
        <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p> 
    </div>
   </section>
  )
}
export default Footer