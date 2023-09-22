import React from 'react'
import { products } from '../constant/page'
import Popularproductcard from './Popularproductcard'


const Popularproduct = () => {
  return (
    <div id='product' className=' max-container max-sm:mt-12 '>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-[palanquin] font-bold' >
          Our <span className=' text-[#FF6452]'>Popular</span> Products
        </h2>
        <p className=' lg:max-w-lg mt-2 font-[montserrat] text-slate-600'>Experience top-notch quality and style with our sought-after selection. Discover a world of comfort,design,and value</p>

      </div>
      <div className='mt-16 grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product)=>(
          <Popularproductcard key={product.name} {... product} />

        ))}
        
      </div>


    </div>
  )
}

export default Popularproduct