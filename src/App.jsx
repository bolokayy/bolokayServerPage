import { useState } from 'react'
import AppLayout from './navigation/header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <AppLayout />
    </>
  )
}

export default App
