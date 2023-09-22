import React from 'react'
import { reviews } from '../constant/page'
import Reviewcard from './Reviewcard'

const Customerreview = () => {
  return (
    <div className= 'max-container'>
      <h3 className='font-bold font-[palanquin] text-center text-4xl'>
        What Our <span className='text-[#FF6452]'> Customers </span>
        Say?
      </h3>
      <p className='font-[montserrat] text-slate-600 text-lg leading-7 m-auto mt-4 max-w-lg text-center' >Hear genuine stories from our satisfied customers about their exceptional experience with us.</p>
      <div className='mt-24 flex  flex-1 justify-evenly items-center max-lg:flex-col gap-14' >
        {reviews.map((review,i)=>(
          <Reviewcard key={i} {...review} />
        ))}
      </div>
    </div>
  )
}

export default Customerreview