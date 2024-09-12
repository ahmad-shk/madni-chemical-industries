import React from 'react'
import '../App.css'
export default function UsageBoxes({label,usage}) {
  return (
    <div className='usageBox flex items-center gap-6 p-2 bg-[#343434] rounded-full border border-[#494949]'>
        <div className='motor p-6 rounded-full font-bold bg-[#252525] text-white flex items-center justify-center'>
            {label}
        </div>
        <div><p>{usage}</p></div>
    </div>
  )
}