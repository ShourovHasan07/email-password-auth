import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-700">
      Hello world!
    </h1>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
