import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

const  addValue=()=>{
    setCounter(preCounter=>preCounter+1)
    setCounter(preCounter=>preCounter+1)
    setCounter(preCounter=>preCounter+1)
    setCounter(preCounter=>preCounter+1)
   
  }
const  removeValue=()=>{
   if (counter<1) {
   setCounter(counter+15)
   }else{
    setCounter(counter-1)
   }
  }

  return (
    <>
     <h1>Xp Tech Vishal</h1>
     <h2 className=' mt-4'>Value :{counter}</h2>

     <button className=' m-4' onClick={addValue} > Add Value</button>
     <button onClick={removeValue} >Remove value</button>
    </>
  )
}

export default App
