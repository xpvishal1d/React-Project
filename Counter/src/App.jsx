import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter ,setCounter]= useState(15)

  // let counter =15

  const addValue=()=>{
    // counter=counter+1
    if (counter===30) {
      counter=counter-15 
      
    }else{
      setCounter(counter+1)
    }
    // console.log(counter , Math.floor(Math.random()*10+1));

  }
  const removeValue=()=>{
    // counter=counter+1
   if(counter<1){
   counter= counter+15
   }else{
    setCounter(counter-1)
   }

    // console.log(counter , Math.floor(Math.random()*10+1));

  }

  return (
    <>
    <h1 className=' mt-2'>Vishal Singh kutta Counter</h1>
    <h2 className=' mt-2'>Counter Value :{counter}</h2>
    <button className=' mt-2'
    onClick={addValue}
    >Add Value</button>
    <br />
    <button 
    onClick={removeValue}
    className=' mt-2'>Remove Value</button>
    <footer>Footer {counter}</footer>
    </>
  )
}

export default App
