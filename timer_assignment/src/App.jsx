import { useState } from 'react'

import { Timer } from './components/timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Timer Values and all
      <Timer startTime={10} endTime={3}></Timer>
    </div>
  )
}

export default App
