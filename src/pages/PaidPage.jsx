import { useState } from 'react'
import './App.css'
    // <img src={reactLogo} className="logo react" alt="React logo" />//
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          PAID 10000 EURO
        </p>
      </div>
    </>
  )
}

export default App