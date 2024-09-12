
import React from 'react'

export default function DescriptionBox({label,description}) {
  return (
    <div className='descriptionBox px-4- py-1 -border-b border-[#c9c9c9]'>
        <div className='flex justify-center pb-4'>
            <div className='px-3 py-1 rounded-full bg-[#c9c9c9] text-black'><h4>{label}</h4></div>
        </div>
        <div>
            <h4 className='text-center'>
            {description}
            </h4>
        </div>
    </div>
  )
}
