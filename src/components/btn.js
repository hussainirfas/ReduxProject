import React from 'react'

export default function Btn({label, amount}) {
  return (
    <div className='flex flex-col justify-between h-36 w-80 rounded-md p-4 bg-slate-500'>
        <div className='flex justify-between'>
            <span>{label}</span>
            <span>{amount}</span>
        </div>
        <div className='flex justify-center'>
            <button className='p-2 h-10 w-32 bg-slate-200 rounded-md'>Submit</button>
        </div>
    </div>
  )
}
