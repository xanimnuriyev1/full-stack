import React from 'react'
import FlaqImg from '../../assets/images/header_icon.png'
import "../../layout/header.css"

const HeaderTop = () => {
  return (
    <section>
        <div className='Head_top'>
       <div className='Head-top-left'>
        <div>
        <img src={FlaqImg} alt="" />
        </div>
        <div>
            <select name="" id="">
                <option value="">USA</option>
                <option value="">SPN</option>
                <option value="">CDA</option>
                <option value="">USD</option>
            </select>
        </div>
        <div>
            <p>+777 2345 7886</p>
        </div>
       </div>
       <div className='head-top-rihgt'>
       <p>My Account</p>
       <p>Wish List</p>
       <p>Shopping</p>
       <p>Cart</p>
       <p>Checkout</p>
       </div>
        </div>
    </section>
  )
}

export default HeaderTop