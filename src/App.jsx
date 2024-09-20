import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import GridWrapper from './components/GridWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GridWrapper />
    </>
  )
}

export default App
