import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let counter = 15

  

  return (
    <>
    <h1>
      HELLO 
    </h1>
    <h2>counter value : 5</h2>

    <button onClick={addValue}>
      Add value
    </button>
    <br/>
    <button>remove value</button>
    </>
  )
}

export default App
