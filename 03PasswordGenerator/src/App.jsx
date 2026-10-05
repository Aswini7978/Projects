import { useState, useCallback,useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState(false)
  const [schar, setSchar] = useState(false)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "1234567890"
    if (schar) str += "!@#$%^&*"
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(random)
    }
    setPassword(pass)
  }, [number, schar, length, setPassword])
 
  const passRef =useRef(null)
  const copyPasswordToClipboard =useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  },[password])
  useEffect(()=>{
    passwordgenerator()
  },[length,number,schar,passwordgenerator])

  return (
    <div className="bg-black">
      <div className=" w-full mx-auto  my-15  py-4 rounded-lg bg-gray-700 text-orange-500">
        <h1 className="text-white text-center text-xl">Password Generator</h1>
        <div className="flex justify-center rounded-lg mb-4  shadow overflow-hidden">
          <input
            type="text"
            value={password}
            placeholder='password'
            className=" flex w-full rounded-b-lg  py-1 px-5 outline-none bg-white max-w-md center"
            readOnly
            ref={passRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className=" bg-blue-600 rounded-md text-white px-2 py-1 mx-1 shrink-0
              hover:bg-blue-700
              active:scale-95
              active:bg-blue-800
              transition
            ">
            copy</button>
        </div>
        <div>
            <input
              type="range"
              value={length}
              min={8}
              max={50}
              className="cursor-pointer bg-white"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
            <input
              type="checkbox"
              value={number}
              className="mx-2 bg-white"
              onChange={()=>{
                setNumber((prev)=>!prev)
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              value={schar}
              className="mx-2"
               onChange={()=>{
                setSchar((prev)=>!prev)
              }}
            />
            <label>Char</label>
        </div>
      </div>
    </div>


  )
}


export default App
