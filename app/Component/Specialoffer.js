import { offer } from '@/public/assets/images'
import React from 'react'
import Image from 'next/image'
import Button from '@/app/Component/Button'
import { arrowRight } from '@/public/assets/icons'

const Specialoffer = () => {
  return (
    <div className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <Image src={offer} height={687} alt='offer' width={773} className='w-full object-contain' />
      </div>

      <div className='flex flex-1 flex-col'>

        <h2 className=' font-[palanquin] text-4xl capitalize  font-bold lg:max-w-lg'>
          <span className='text-[#FF6452]'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg font-[montserrat] text-slate-600 text-lg leading-7'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selection to incredible savings, we offer unparalledled value that sets us apart.</p>
        <p className='mt-6 lg:max-w-lg font-[montserrat]  text-slate-600 text-lg leading-7'>Navigate a realm of possibilities designed to fulfill your unquie desire, surpassing the loftiest expectations.your journey with us is nothing short of exceptional.</p>
        <div className='mt-11 flex flex-wrap gap-4'>

          <Button label="Shop now" iconURl ={arrowRight} />
          <Button label = "Learn more" backgroundColor = "bg-white" borderColor = "border-slate-600" textColor = "text-black"/>
        </div>

      </div>

    </div>
  )
}

export default Specialoffer