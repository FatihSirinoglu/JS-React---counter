import React from 'react'
import { useState } from 'react'

function App() {
    const [count, setCount]=useState(0)
    const [input, setInput]=useState(1)

    const [autoInput, setAutoInput]=useState(1)

    const [intervalId, setIntervalId]=useState(null)
    // this state holds the changing value of count

    const handleAutoClick = () => {
      let intervalId
      if (count < 100) {
        intervalId = setInterval(() => {
          setCount(prevCount => {
          if (prevCount >= 100) {
            clearInterval(intervalId);
            return 0;
          }
          return Number(prevCount) + Number(autoInput);
        });  
        }, 1000);
      }
    };
    const handleStopClick = () => {
      clearInterval(intervalId);
      return setCount(prevCount=>prevCount);
    };
    const handleResetClick = () => {
      clearInterval(intervalId);
      setIntervalId(null)
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
            <input className='input' onChange={(event) => setInput(event.target.value)} placeholder="Kaçar artsın/azalsın?"></input><br /><br /> 
          </div>
          <div className='auto'>
            <button className='auto' onClick={handleAutoClick}>Start Auto Count</button><br /><br />
            <input className='input' placeholder='Oto Count Value' onChange={(e)=>setAutoInput(e.target.value)}></input> <br /><br />
            <button className='btn' onClick={handleStopClick} >Stop</button> 
            <button className='btn' onClick={handleResetClick}>Reset</button>
          </div>

          <div className='footer'>

          </div>
        </div>
    )
}


export default App;