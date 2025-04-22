import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo'; // Importa el componente




function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
          <div>
      {/* Usa el componente como una etiqueta HTML */}
      <Saludo nombre="Ana" />
      <Saludo nombre="Carlos" />
    </div>
      <p>Edit <code>src/App.jsx</code> </p>{count}
      
      <div className="card">
        <button onClick={() => setCount(count - 1)}>
          Decrementar 
        </button>
      </div>

      <div className="card1">
        <button onClick={() => setCount(count + 1)}>
          Incrementar 
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App