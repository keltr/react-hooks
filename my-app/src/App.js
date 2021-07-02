import React, { useEffect, useState } from 'react';

function useLogger(value) {
  useEffect(()=>{
    console.log('valueChange')
  },[value])
}

function useInput(initialValue) {
  const [value,setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }
  const clear = () => {
    setValue('')
  }

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  const input = useInput('')
  const lastName = useInput('')

  useLogger(input.value)
  
  return (
    <div className="container pt-3">
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      <input type="text" {...input.bind} />
      <button className="btn btn-success" onClick={()=> input.clear()} />
      <hr/>
      <h1>{input.value}</h1>
    </div>
  );
}

export default App;
