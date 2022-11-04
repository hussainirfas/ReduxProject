import React from 'react'
import { useDispatch } from 'react-redux'

export default function Btn({label, amount}) {

  const dispatch = useDispatch()

  function handleSubmit(){
    if(label==='EMI'){
      dispatch({type: 'Spend', payload: amount})
    } else if(label==='Salary'){
      dispatch({type: 'Receive', payload: amount})
    }
  }

  return (
    <div className='flex flex-col justify-between h-36 w-80 rounded-md p-4 bg-slate-500'>
        <div className='flex justify-between'>
            <span>{label}</span>
            <span>{amount}</span>
        </div>
        <div className='flex justify-center'>
            <button className='p-2 h-10 w-32 bg-slate-200 rounded-md' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
