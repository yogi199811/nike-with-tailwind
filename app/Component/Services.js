import React from 'react'
import { services } from '../constant/page'
import Servicecard from './Servicecard'

const Services = () => {
  return (
    <div className='flex  justify-center items-center flex-wrap gap-9 max-container'>
      {services.map((det,i)=>(
        <Servicecard key={i} {...det}/>
      ))}

    </div>
  )
}

export default Services