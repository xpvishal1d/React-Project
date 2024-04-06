import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  // const [count, setCount] = useState(0)

  

  return (
    <>
    <h1 className=' px-2 rounded-md bg-green-600 mb-3'> Tailwind Test</h1>

    <Card username ="Krishna" images="https://images.pexels.com/photos/20804267/pexels-photo-20804267/free-photo-of-shree-krishna-4k-photo.jpeg" />
   
   
    <Card username ="Vishal" images="https://images.pexels.com/photos/18519627/pexels-photo-18519627/free-photo-of-a-young-girl-is-smiling-and-holding-a-teddy-bear.jpeg?auto=compress&cs=tinysrgb&w=600" />
   

    <Card username="DevRaj" images="https://images.pexels.com/photos/7158406/pexels-photo-7158406.jpeg?auto=compress&cs=tinysrgb&w=600"   />

   
     
    </>
  )
}

export default App
