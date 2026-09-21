import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const addValue = () => {
    console.log("clicked" , count);
    if(count<20) setCount(count+1)
  }

  const removeValue = () => {
    console.log("clicked" , count);
   if(count>0) setCount(count-1)
  }

  return (
    <div>
      
    <h1>lecture 5 about hooks</h1>
<br/>
    <h2>count value : {count}</h2>
    <br/>   
    <button onClick={addValue}>
      Add value {count}
    </button>
    <br/>
    <br/>
    <button onClick={removeValue}>
      Remove Value {count}
    </button>
    <br/>
    <br/>
    <h2>count value is {count}</h2>
   </div>
  )
}

export default App
