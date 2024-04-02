import { useState } from 'react'
import './App.css'
import RouterPath from './RouterPath.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterPath/>
    </>
  )
}

export default App
