import React from 'react'
import Image from 'next/image'
import { footerLogo } from '@/public/assets/images'
import { footerLinks, socialMedia } from '../constant/page'
import { copyrightSign } from '@/public/assets/icons'

const Footer = () => {
  return (
    <div className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col' >
        <div className='flex flex-col items-start'>
          <a href='/'> <Image src={footerLogo} width={150} height={46} />  </a>
          <p className=' mt-6 text-base leading-7 font-[montserrat] text-white sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store.Find your perfect Size In Store. Get Rewards </p>
          <div className='flex items-center gap-5 mt-8' >
            {socialMedia.map((icon, i) => (
              <div key={i} className=' flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>

            ))}

          </div>

        </div>
        <div className=' flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((link, i) => (
            <div key={i} >
              <h4 className=' text-white text-2xl font-[montserrat] mb-6  leading-normal font-medium'>{link.title}</h4>
              <ul>{link.links.map((li, ind) => (
                <li className='mt-3 text-white font-[montserrat] text-base leading-normal hover:text-[#FF6452]' key={ind}>
                  <a href={li.link}>{li.name}</a>

                </li>
              ))}
              </ul>


            </div>
          ))}
        </div>

      </div>
      <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex  font-[montserrat] flex-1 justify-start items-center gap-2 cursor-pointer'>
          <Image src={copyrightSign} alt='copy right sign' width={20} height={20} className=' rounded-full' />
          <p>Copyright. All rights reserved.</p>

        </div>

        <p className='font-[montserrat] cursor-pointer'>Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer