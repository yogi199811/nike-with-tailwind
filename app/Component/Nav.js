"use client"
import { headerLogo } from '@/public/assets/images'
import React from 'react'
import Image from 'next/image'
import { hamburger } from '@/public/assets/icons'

const Nav = () => {
  return (
    <>
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between text-slate-700 items-center max-container'>
          <a>
            <Image src={headerLogo} width={130} height={29} alt='logo' />
          </a>
          <a className='max-lg:hidden' href='/' >Home</a>
          <a className='max-lg:hidden' href='/' >About Us</a>
          <a className='max-lg:hidden' href='/' >Products</a>
          <a className='max-lg:hidden' href='/' >Contact Us</a>
          
          

        <div className='hidden max-lg:block'>
          <Image src={hamburger} width={25} height={25} alt='icon' />
        </div>

        </nav>
      </header>


    </>

  )
}

export default Nav