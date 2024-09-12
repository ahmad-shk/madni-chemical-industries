import React from 'react'
import '../App.css'
export default function UsageBoxes({label,usage}) {
  return (
    <div className='usageBox flex items-center gap-6 p-2 bg-[#c9c9c9] rounded-lg border border-[#494949]'>
        <div className='motor px-4 py-2 rounded-full font-bold bg-[#0d67a5] text-white flex items-center justify-center'>
            {label}
        </div>
        <div><p className=' md:text-[24px] '>{usage}</p></div>
    </div>
  )
}