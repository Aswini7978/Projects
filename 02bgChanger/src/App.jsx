import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='flex justify-center text-black items-end min-h-screen gap-4'
      style={{backgroundColor:color}}
      > 
        <button className='rounded-xl p-4 bg-red-400 px-5 py-5 m-5 shadow-2xl'
        onClick={()=>{setColor("red")}}
        >Red</button>
        <button className='rounded-xl p-4 bg-green-500 m-5 px-5 py-5 '
        onClick={()=>{setColor("green")}}
        >green</button>
        <button className='rounded-xl p-4 bg-yellow-500 m-5 px-5 py-5'
        onClick={()=>{setColor("yellow")}}
        >yellow</button>
        <button className='rounded-xl p-4 bg-blue-500 m-5 px-5 py-5'
        onClick={()=>{setColor("blue")}}
        >blue</button>
        <button className='rounded-xl p-4 bg-pink-500 m-5 px-5 py-5'
        onClick={()=>{setColor("pink")}}
        >pink</button>
        <button className='rounded-xl p-4 bg-violet-500 m-5 px-5 py-5'
        onClick={()=>{setColor("violet")}}
        >violet</button>
        </div>         
         
    </>
  )
}

export default App
