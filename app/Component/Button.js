import React from 'react'
import Image from 'next/image'

const Button = (props) => {
    const { label, iconUrl,backgroundColor, textColor,borderColor,fullWidth } = props
    return (
        <button className= {`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${backgroundColor} ? ${backgroundColor} ${textColor} ${borderColor} :
        
        bg-[#FF6452] border-[#FF6452] p-3  text-black rounded-full ${fullWidth && 'w-full'}`}>
            
            {label}
            
           {iconUrl && <Image src={iconUrl} className='ml-2 rounded-full w-5 h-5' alt='arrow' />}



        </button>
    )
}

export default Button