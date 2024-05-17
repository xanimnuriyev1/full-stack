import React from 'react'
import "./home.css"
import HeroImg from "../../assets/images/hero_man.png"
import HomeTop from './homeother/HomeTop'
import HomeCenter from './homeother/HomeCenter'
import HomeEnd from './homeother/HomeEnd'
import Footer from '../../layout/Footer'

const Home = () => {
  return (
   <section>
    <div className='herobackground'>
     <div className='heroBox'>
     <div>
      <img className='HeroImgC' src={HeroImg} alt="" />
     </div>
     <div>
      <p className='Discount'>
        60% Discount 
      </p>
      <h1 className='WinterText'>Winter <br />Collection</h1>
      <p>Best Cloth COllection By 2020!</p>
      <button className='SignBtn ShopBtn'>Shop Now</button>
     </div>
     </div>
    </div>
    <HomeTop/>
    <HomeCenter/>
    <HomeEnd/>
    <Footer/>
   </section>
  )
}

export default Home