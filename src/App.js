import React from 'react'
import { useState } from 'react'

function App() {
    const [count, setCount]=useState(0)
    const [input, setInput]=useState(1)
    
    return (
        <div>
          <div className='header'>
            <h1>Kahrolası Counter a HojGeldiniz</h1>
            <h1>{count}</h1>
          </div>  
          <div className='container'>
          <h1>{count}</h1>
            <button className='btn' onClick={()=>(setCount(count-(Number(input))))}>Decrease</button>
            <button className='btn reset' onClick={()=>(setCount(0))}>Reset</button>
            <button className='btn' onClick={()=>(setCount(count+(Number(input))))}>Increase</button><br /><br />
            <input className='input' onChange={(event) => setInput(event.target.value)} placeholder="Kaçar artsın/azalsın?"></input>
            <h1>{count}</h1>
          </div>
        </div>
    )
}


export default App;