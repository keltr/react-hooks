import React, {useState, useMemo, useEffect} from 'react';

function complexCompute(num) {
  console.log('aaaa');
  let i = 0
  while(i<1000000000) i++
  return num*2
}

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [number,setNumber] = useState(42)
  const [colored,setColored] = useState(false)

  const styles = useMemo(()=>{
    return {
      color: colored ? 'darkred' : 'black'
    }
  },[colored])
  
  const computed = useMemo(()=>{
    return complexCompute(number)
  },[number])

  useEffect(()=>{
    console.log('styles changed')
  },[styles])

  return (
    <div>
      <h1 style={styles}>prop {computed}</h1>
      <button className="btn btn-success" onClick={()=>setNumber(prev=>prev+1)}>add</button>
      <button className="btn btn-danger" onClick={()=>setNumber(prev=>prev-1)}>delete</button>
      <button className="btn btn-danger" onClick={()=>setColored(prev=>!prev)}>change</button>
    </div>
  );
}

export default App;
