import React from 'react'
import Image from 'next/image';

const Shoecard = (props) => {
    const { imgUrl, changeBigShoeImage, bigShoeImg } = props;

    const handleClick = () => {
        if (bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        }

    }
    return (
        <div onClick={handleClick} className={`border-2 rounded-xl ${bigShoeImg === imgUrl.bigShoe ? 'border-[#FF6452]' : 'border-transparent'} cursor-pointer max-sm:flex-1`}>
            <div className='flex items-center justify-center bg-gray-400  bg-center bg-cover  sm:w-40 sm:h-40 rounded-xl  max-sm:p-4'>
                <Image src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} className='object-contain' />
            </div>
        </div>
    )
}

export default Shoecard