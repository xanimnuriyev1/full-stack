import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const HeaderDown = () => {
  return (
 <section>
    <div className='header-down'>
     <div className='Logo'>
        <h1 className='LogoText'>Estore <span>.</span></h1>
     </div>
     <div className='router'>
        <nav>
            <ul>
                <li><NavLink to={'/'} className={(navdata)=>navdata.isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to={'/catagory'} className={(navdata)=>navdata.isActive ? "active" : ""}>Add</NavLink></li>
                <li><NavLink to={'/latest'} className={(navdata)=>navdata.isActive ? "active" : ""}>Latest</NavLink></li>
                <li><NavLink to={'/blog'} className={(navdata)=>navdata.isActive ? "active" : ""}>Blog</NavLink></li>
                <li><NavLink to={'/page'} className={(navdata)=>navdata.isActive ? "active" : ""}>Pages</NavLink></li>
                <li><NavLink to={'/contact'} className={(navdata)=>navdata.isActive ? "active" : ""}>Contact</NavLink></li>
            </ul>
        </nav>
     </div>
     <div className='header-down-right'>
        <div className='circle'>
        <FaShoppingCart />
        </div>
        <div className='circle'>
        <FaRegHeart />
        </div>
        <div >
            <button className='SignBtn'>Sign In</button>
        </div>
     </div>
    </div>
 </section>
  )
}

export default HeaderDown