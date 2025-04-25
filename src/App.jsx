import { useState } from 'react'
import senaLogo from '/Logosena.png'
import './App.css'
import Saludo from './components/saludo'; // Importa el componente




function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='border- && flex flex-col items-center justify-center min-h-screen py-2'>
        <a href="https://c0.klipartz.com/pngpicture/440/795/gratis-png-logo-servicio-nacional-de-aprendizaje-sena-simbolo-servicio-de-entrenamiento-nacional-logo-de-dragon-ball-thumbnail.png" target="_blank">
          <img src={senaLogo} className="" alt="Vite logo" />
        </a>
     

      <h1 className='text-purple-500 && font-mono && font-bold && text-6xl && text-center '>Mi primera app</h1>
          <div className="text-purple-500 && font-mono && font-bold && text-6xl && text-center pt-20 ">
      {/* Usa el componente como una etiqueta HTML */}
      <div><Saludo nombre="Pepito" />
      </div>

    </div>
      
      <div className="text-purple-500 && font-mono && font-bold && text-6xl && text-center pt-20">
      {count}
            </div>
      <div className="relative border-8 border-white && border-dashed && text-red-500 && font-mono && font-bold && text-6xl && text-center mr-200  ml-200  m-20">
        <button onClick={() => setCount(count - 1)}>
          Decrementar 
        </button>
      </div>

      <div className="relative border-8 border-white && border-dashed && text-green-500 && font-mono && font-bold && text-6xl && text-center mr-200  ml-200  m-20 ">
        <button onClick={() => setCount(count + 1)}>
          Incrementar 
        </button>
      </div>

      <p className="text-yellow-500 && font-mono && font-bold && text-6xl && text-center pt-20  ">
        solo sena
      </p> </div>
    </>
  )
}

export default App
