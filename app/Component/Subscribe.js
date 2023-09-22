import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <div className='flex justify-between items-center max-w-[1440px] max-lg:flex-col gap-10' id='contact us' >
      <h3 className=' text-4xl leading-[68px] lg:max-w-md font-[palanquin] font-bold'>Sign Up For<span className='text-[#FF6452]'> Update</span> & Newsletter </h3>
      <div className=' lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-600 rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='sm:flex-1 max-sm:w-full text-base leading-normal text-slate-600 pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-600 max-sm:rounded-full' />
      <div className='flex max-sm:justify-end items-center max-sm:w-full' >

      <Button label="Sign up" fullWidth />
      </div>
      </div>
    </div>
  )
}

export default Subscribe