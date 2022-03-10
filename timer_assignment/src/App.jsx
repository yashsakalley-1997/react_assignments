import { useState } from 'react'

import { Timer } from './components/timer'
import './App.css'

function App() {
  const [show,setShow] = useState(true);

  return (
    <div className="App">
      {show?<Timer startTime={10} endTime={3}></Timer>:""}

      <button onClick={()=>{
        setShow(!show)
      }}>
        {show?"Hide Timer":"Show Timer"}
      </button>
    </div>
  )
}

export default App
