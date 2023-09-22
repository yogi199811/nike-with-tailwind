"use client"
import React from 'react'
import tailwindConfig from '@/tailwind.config'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Popularproduct from './Component/Popularproduct'
import Superquality from './Component/Superquality'
import Services from './Component/Services'
import Specialoffer from './Component/Specialoffer'
import Customerreview from './Component/Customerreview'
import Subscribe from './Component/Subscribe'
import Footer from './Component/Footer'
const page = () => {
  return (
    <>
      <div id='main' className='relative'>
        <Nav />

        <div className='xl:padding-l wide:padding-r padding-b w-full h-full ' >
          <Hero />
        </div>
        <div className='padding'>
          <Popularproduct />
        </div>
        <div className='padding'>
          <Superquality />
        </div>
        <div className='padding-x py-10'>
          <Services />
        </div>
        <div className='padding'>
          <Specialoffer />
        </div>
        <div className='bg-pale-blue padding'>
          <Customerreview />
        </div>
        <div className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe />
        </div>
        <div className='bg-black padding-x padding-t pb-8'>
          <Footer />
        </div>

      </div>





    </>

  )
}

export default page