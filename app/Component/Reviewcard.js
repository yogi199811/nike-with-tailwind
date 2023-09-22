import React from 'react'
import Image from 'next/image';
import { star } from '@/public/assets/icons';

const Reviewcard = (props) => {
    const {customerName,imgURL,rating,feedback} = props;
  return (
    <div className='flex flex-col items-center justify-center'>
        <Image src = {imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className=' mt-6 max-w-sm text-center font-[montserrat] text-slate-600 text-lg leading-7' >{feedback}</p>
        <div className=' mt-3 flex justify-center items-center gap-2.5'>
            <Image src={star} alt='star' height={24} width={24} className=' object-contain m-0' />
            <p className=' text-xl font-[montserrat] text-slate-600' >({rating})</p>
            </div>
            <h3 className='mt-1 font-[palanquin] text-center font-bold text-3xl' >{customerName}</h3>
        
    </div>
  )
}

export default Reviewcard