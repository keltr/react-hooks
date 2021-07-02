import React, {useState, useMemo, useEffect, useCallback} from 'react';
import ItemsList from './itemsList';

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [count,setCount] = useState(1)
  const [colored,setColored] = useState(false)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }
  
  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_,i) => `elem ${i+indexNumber}`)
  },[count])

  return (
    <div>
      <h1 style={styles}>amount: {count}</h1>
      <button className="btn btn-success" onClick={()=>setCount(prev=>prev+1)}>add</button>
      <button className="btn btn-warning" onClick={()=>setColored(prev=>!prev)}>change</button>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
