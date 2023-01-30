import React from 'react'
import { useState } from 'react'



function App() {
    const [count, setCount]=useState(0)
    const [input, setInput]=useState(1)
    
    return (
        <div>
          <div className='header'>
            <h1>Kahrolası Counter a HojGeldiniz</h1>
            <h2>{count}</h2>
          </div>  
          <div className='container'>
            <input onChange={(event) => setInput(event.target.value)} placeholder="Kaçar artsın/azalsın?"></input>
            <button onClick={()=>(setCount(count-(Number(input))))}>Decrease</button>
            <button onClick={()=>(setCount(0))}>Reset</button>
            <button onClick={()=>(setCount(count+(Number(input))))}>Increase</button>
          </div>
        </div>
    )
}


export default App;