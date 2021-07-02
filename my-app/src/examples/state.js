import React, {useState} from 'react';

function computeInitialCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random()*20)
}

function App() {
  // const [counter, setCounter] = useState(computeInitialCounter())
  const [counter, setCounter] = useState(()=>computeInitialCounter())

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
    
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Add</button>
      <button onClick={decrement} className="btn btn-danger">Delete</button>
      <button onClick={()=>setState(prev=>{return {...prev,title:'new title'}})} className="btn btn-danger">Change title</button>
      <pre>{JSON.stringify(state,null,2)}</pre>
    </div>
  );
}

export default App;
