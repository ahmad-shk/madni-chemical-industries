
import React from 'react'
import '../App.css'
export default function DescriptionBox({label,description}) {
  return (
    <div className='descriptionBox p-4 border-b border-[#717171]'>
        <div className='flex justify-between pb-4'>
            <div className='px-3 py-1 rounded-full bg-[#0d67a5] text-white'><h4>{label}</h4></div>
        </div>
        <div>
            <h4>
            {description}
            </h4>
        </div>
    </div>
  )
}
