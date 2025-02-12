import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useNavigate } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>El elemento JSX tiene el tipo "any" implícitamente porque no existe ninguna interfaz "JSX.IntrinsicElements".ts(7026)
        <button onClick={() => setCount(0)}>quiero colocar en cero el contador</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleLogin}>
        Login
      </button>
    </>
  )
}

export default App
