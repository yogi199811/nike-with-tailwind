import React from 'react'
import Image from 'next/image'
import { star } from '@/public/assets/icons'

const Popularproductcard = (props) => {
  const {imgURL,name,price} = props
  return (
    <div>
      <Image src={imgURL} alt={name} className='w-[280px] h-[280px]'/>
      <div className='mt-8 flex justify-start gap-2.5'>
        <Image src={star} width={24} height={24} alt='rating' />
        <p className='font-[montserrat] text-xl leading-normal text-slate-600'>(4.5)</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-[palanquin]'>{name}</h3>
      <p className='mt-2 font-semibold text-[#FF6452] font-[montserrat] text-2lx leading-normal'>{price}</p>
      </div>
  )
}

export default Popularproductcard