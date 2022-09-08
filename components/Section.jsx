import React from 'react'
import { FaWordpress, FaReact, FaShopify, FaWix } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss, SiFramer } from 'react-icons/si'


const Section = () => {
  return (
    <div className='-mt-12 mb-4'>
      <div className='flex justify-evenly items-center m-2 text-primary'>
        <FaWordpress
          size={80}
          className='m-4'
        />
        <TbBrandNextjs
          size={80}
          className='m-4'
        />
        <FaReact
          size={80}
          className='m-4'
        />
        <SiTailwindcss
          size={80}
          className='m-4'
        />
        <SiFramer
          size={80}
          className='m-4'
        />
        <FaShopify
          size={80}
          className='m-4'
        />
         <FaWix
          size={80}
          className='m-4'
        />
      </div>
    </div>
  )
}

export default Section