import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'


import './App.css'
import Login from './componets/Login'
import Profile from './componets/Profile'

function App() {
 

  return (
    <UserContextProvider>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
