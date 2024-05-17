import React from 'react'
import LatestImg from "../../../assets/images/latest-man.png"
const HomeEnd = () => {
  return (
   <section className='HomeEndHero'>
    <div className="LatestOffer">
    <div>
     <img src={LatestImg} alt="" />
    </div>
    <div>
        <h1>Get Our <br />
     Latest Offers News</h1>
     <p>Subscribe news latter</p>
    </div>
    <div>
        <input type="email" placeholder='Your email here'/>
        <button className='ShopBtn'>Shop now</button>
    </div>
    </div>
   </section>
  )
}

export default HomeEnd