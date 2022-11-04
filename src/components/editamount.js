import React from 'react';
import { useState } from 'react';

export default function Editamount ({label}) {
    const [val, setVal] = useState(0);

    function handleChange(e) {
        setVal(e.target.value)
    };

  return (
    <div className='flex flex-col justify-between bg-slate-500 h-48 w-80 rounded-md p-4'>
        <span className='text-center'>{label}</span>
        <input className='p-4 h-10' type="number" min="1" max="2000000" value={val} onChange={handleChange}/>
        <div className='flex justify-center'>
            <button className='p-2 h-10 w-32 bg-slate-200 rounded-md'>Submit</button>
        </div>
    </div>
  )
}
