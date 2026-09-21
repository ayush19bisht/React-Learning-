import { useState , useCallback , useEffect , useRef} from 'react'




function App() {
  const [length , setlength] = useState(8)
  const [numallowed , setnumallowed] = useState(false)
  const [charallowed , setcharallowed] = useState(false)
  const [password , setpassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( ()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed) str += "0123456789"
    if(charallowed) str += "!@#$"
    for(let i=1 ; i<=length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setpassword(pass)
  } , [length , numallowed , charallowed , setpassword])

  const copypasstoclipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  } , [password])

 useEffect(()=> {passwordGenerator()} , [length , numallowed , charallowed , passwordGenerator])

  return (
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg text-gray-500 overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none bg-white w-full py-1 px-3 "
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copypasstoclipboard} 
        className='cursor-pointer text-white bg-blue-500'>copy</button>
    
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numallowed}
          id='numberInput'
          onChange={() => {setnumallowed((prev) => !prev)}}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charallowed}
          id='characterInput'
          onChange={() => {setcharallowed((prev) => !prev)}}
          />
          <label>Characters</label>
        </div>
      </div>
      </div>
    
  )
}

export default App
