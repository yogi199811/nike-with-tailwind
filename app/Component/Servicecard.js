import React from 'react'
import Image from 'next/image'

const Servicecard = (props) => {
    const {imgURL,label,subtext} = props
  return (
    <div className=' flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  shadow-2xl  px-10 py-16'>
        <div className=' w-11 h-11 rounded-full flex justify-center  items-center bg-[#FF6452]'>

        <Image src={imgURL} alt='image' />
        </div>
        <h3 className='mt-5 font-[palanquin] text-3xl leading-normal font-bold'>{label}</h3>
        <p className='mt-3 break-words font-[montserrat] leading-normal text-lg text-slate-600'>{subtext}</p>

    </div>
  )
}

export default Servicecard