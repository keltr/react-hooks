import React, {useState, useEffect} from 'react';

function App() {
  const [type,setType] = useState('users')
  const [data,setData] = useState([])
  const [pos, setPos] = useState({
    x:0,y:0
  })

  const mouseMoveHendler = event => {
    setPos({
      x: event.clientX,
      y:event.clientY
    })
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))
  }, [type])

  useEffect(()=>{
    console.log('componentDidMount')
    window.addEventListener('mousemove', mouseMoveHendler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHendler)
    }
  },[])

  return (
    <div>
      <h1>Resorses: {type}</h1>
      <button onClick={()=>setType('users')}>Users</button>
      <button onClick={()=>setType('todos')}>Todo</button>
      <button onClick={()=>setType('posts')}>Posts</button>

      {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
      <pre>{JSON.stringify(pos,null,2)}</pre>
    </div>
  );
}

export default App;
