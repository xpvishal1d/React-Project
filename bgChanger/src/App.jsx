import React, { useState } from 'react'

function App() {

  const [color , setColor] = useState("olive")

  return (
    <div className=' h-screen w-full duration-200'
    style={{backgroundColor:color}}
    >
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className=' flex flex-wrap justify-center gap-3 py-2 px-3 shadow-lg bg-white rounded-3xl'>

          <button onClick={()=>{setColor("red")}} style={{backgroundColor:"red"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>Red</button>
          <button onClick={()=>{setColor("blue")}} style={{backgroundColor:"blue"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>Blue</button>
          <button onClick={()=>{setColor("green")}} style={{backgroundColor:"green"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>green</button>
          <button onClick={()=>{setColor("pink")}} style={{backgroundColor:"pink"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>pink</button>
          <button onClick={()=>{setColor("skyblue")}} style={{backgroundColor:"skyblue"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>skyblue</button>
          <button onClick={()=>{setColor("yellow")}} style={{backgroundColor:"yellow"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>yellow</button>
          <button onClick={()=>{setColor("black")}} style={{backgroundColor:"black"}} className= ' px-4 outline-none py-1 rounded-full text-white shadow-lg'>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
