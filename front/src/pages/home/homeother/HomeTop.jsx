import React from 'react'

const HomeTop = () => {
  return (
   <section className='ShopSection'>
     <div>
    <h2 className='ShopText'>Shop by Category</h2>
    <div className='Cats'>
        <div className='Cat1'>
     <div className='catBox'> 
     <h2>Owmen`S</h2>
      <button className='YellowBtn'>Best New Deals</button>
      <p>New Collection</p>
     </div>
        </div>
        <div className='Cat2'>
       <div className='catBox'>
       <h2>Discount!</h2>
      <p>Winter Cloth</p>
      <p>New Collection</p>
       </div>
        </div>
        <div className='Cat3'>
       <div className='catBox'>
       <h2>Man`S Cloth</h2>
      <button className='YellowBtn'>Best New Deals</button>
      <p>New Collection</p>
       </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default HomeTop