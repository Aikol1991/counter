import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button className='btn-decrease' onClick={() => setCount(count -1)} disabled={count ===0}>Decrease</button>
        <button className='btn-reset' onClick={() => setCount(0)} disabled={count ===0}>Reset</button>
        <button className='btn-increase' onClick={() => setCount(count +1)}>Increase</button>
    </div>
  );
}

export default App;
