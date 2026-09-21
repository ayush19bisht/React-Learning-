import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const[color , setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setcolor("red")}
          className="cursor-pointer outline-none px-3 py-2 rounded-full text-white"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button onClick={() => setcolor("green")}
          className="cursor-pointer outline-none px-3 py-2 rounded-full text-white"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button onClick={() => setcolor("blue")}
          className="cursor-pointer outline-none px-3 py-2 rounded-full text-white"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button onClick={() => setcolor("yellow")}
          className="cursor-pointer outline-none px-3 py-2 rounded-full text-black"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button onClick={()=> setcolor("black")}
          className="cursor-pointer outline-none px-3 py-2 rounded-full text-white"
          style={{backgroundColor:"black"}}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
