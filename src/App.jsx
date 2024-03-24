import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*;";
    for (let i = 1; i <= length; i++) {
      let char = str[Math.floor(Math.random()*str.length)];
      pass+=char
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div  className='bg-black'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl text-center text-white my-1'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mt-3 mb-5'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-2'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            className='cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput" 
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}  
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id="characterInput" 
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}  
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
