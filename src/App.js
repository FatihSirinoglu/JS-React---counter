import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={()=>setCount(count-1)}>Decrase</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increse</button>
      </div>
      
    </div>
  );
}

export default App;
