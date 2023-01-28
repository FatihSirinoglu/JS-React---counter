import React from 'react'
import { useState, } from 'react';
import PersonalChoices from './PersonalChoices';


function Counter() {
    
    const [count,setCount]=useState(0)
    const increase = ()=>{setCount(count+1)}
    const decrease = ()=>{setCount(`${count}-${personalIncrease}`)}
  return (


    <div>
        <div className='container'>
        <h1>Counter</h1>
        <h2>{count}</h2>
        
        <label className='btn'>
          <button onClick={decrease} className='btn'>Decrease</button>
          <button onClick={()=>setCount(0)} className='reset'>Reset</button>
          <button onClick={increase} className='btn'>Increase</button>
        </label>
      </div>
    </div>
  )
}

export default Counter;