import { useState } from 'react'
import escudosena from '/Escudosena.png'
import senaLogo from '/Logosena.png'
import './App.css'
import Saludo from './components/saludo'; // Importa el componente




function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://static.wikia.nocookie.net/logopedia/images/e/eb/Escudosena.png/revision/latest?cb=20240403134229&path-prefix=es" target="_blank">
          <img src={escudosena} className="logo react" alt="React logo" />
        </a>
        <a href="https://c0.klipartz.com/pngpicture/440/795/gratis-png-logo-servicio-nacional-de-aprendizaje-sena-simbolo-servicio-de-entrenamiento-nacional-logo-de-dragon-ball-thumbnail.png" target="_blank">
          <img src={senaLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Mi primera app</h1>
          <div>
      {/* Usa el componente como una etiqueta HTML */}
      <Saludo nombre="Pepito" />

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