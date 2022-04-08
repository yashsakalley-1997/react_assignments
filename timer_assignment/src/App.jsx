import { useState } from 'react'

import { Timer } from './components/timer';
import { Forms } from './components/Forms';
import './App.css'

function App() {
  const [show,setShow] = useState(true);

  return (
    <div className="App">
      {show?<Timer startTime={10} endTime={20}></Timer>:""}

      <button onClick={()=>{
        setShow(!show)
      }}>
        {show?"Hide Timer":"Show Timer"}
      </button>
      <Forms></Forms>
    </div>
  )
}

export default App
