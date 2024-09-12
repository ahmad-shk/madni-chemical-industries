import React from 'react'

export default function DescriptionBoxSmall({label,description}) {

  return (
    <div className='descriptionBox p-4 border-b border-[#c9c9c9]'>
        <div className='flex justify-between pb-4'>
            <div className='px-3 py-1 rounded-full bg-[#c9c9c9] text-black'><h4>{label}</h4></div>
        </div>
        <div>
            <h4>
            {description}
            </h4>
        </div>
    </div>
  )
}