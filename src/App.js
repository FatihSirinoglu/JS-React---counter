import React from 'react'
import { useState } from 'react'

function App() {
    const [count, setCount]=useState(0)
    const [input, setInput]=useState(1)
    
    const handleClick = () => {
      let intervalId;
      if (count < 100) {
        intervalId = setInterval(() => {
          setCount(prevCount => {
          if (prevCount >= 100) {
            clearInterval(intervalId);
            return prevCount;
          }
          return prevCount + 1;
        });  
        }, 1000);
      }
    };
    
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
            <br />
            <p>{count}</p>
            <button onClick={handleClick}>Start Auto Count</button>
          </div>
        </div>
    )
}


export default App;