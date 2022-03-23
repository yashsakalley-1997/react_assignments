import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Todo } from './components/Todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Todo></Todo>
      </header>
    </div>
  )
}

export default App
