import React, { useState } from 'react'
import Button from './Button'
import { arrowRight } from '@/public/assets/icons'
import { shoes, statistics } from '../constant/page'
import Image from 'next/image'
import { bigShoe1, bigShoe2 } from '@/public/assets/images'
import Shoecard from './Shoecard'

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe2)
    return (
        <>
            <div id='hero' className='w-full flex xl:flex-row flex-col justify-center min-h-screen h-full gap-10 max-container  p-2'>

                <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                    <p className='text-xl text-[#FF6452] font-[montserrat] capitalize'>our summer collection</p>
                    <h1 className='mt-10 font-[palanquin] text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'>
                        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                        <br />
                        <span className='text-[#FF6452] inline-block mt-5'>Nike</span> Shoes

                    </h1>
                    <p className='font-[montserrat] text-slate-400 text-lg leading-8 mt-4 mb-10 sm:max-w-sm'>Discover stylish Nike arrivals,quality comfort, and innovation for your active life.</p>
                    <Button label="Shop now" iconUrl={arrowRight} />
                    <div className='flex justify-center items-start mt-10 gap-16'>
                        {statistics.map((stats, i) => (
                            <div key={i}>
                                <p className='text-4xl font-[palanquin] font-bold'>{stats.value}</p>
                                <p className='leading-7 font-[montserrat] text-slate-400' >{stats.label}</p>
                            </div>
                        ))}

                    </div>

                </div>
                <div className='flex justify-center  items-center flex-1 xl:min-h-screen max-xl:py-40  relative bg-slate-200 bg-hero bg-cover bg-center'>
                    <Image src={bigShoeImg} alt='shoe1' width={610} height={500} className='object-contain relative z-10' />

                    <div className='flex sm:gap-6 gap-4 absolute  sm:left-[10%] -bottom-[5%]  max-sm:px-6'>
                        {shoes.map((shoe, i) => (
                            <div key={i}>
                                <Shoecard imgUrl={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg = {bigShoeImg} />

                            </div>
                        ))}
                    </div>

                </div>

            </div>



        </>

    )
}

export default Hero