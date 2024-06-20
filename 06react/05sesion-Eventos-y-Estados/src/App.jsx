import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OtroBoton  from './OtroBoton' 

function App() {

  // function clickHandler (event) {
  //   console.log("Click", event)
  // }

  const [ counter, setCounter ] = useState(0)

  function avanzarContador () {
    setCounter(counter + 1)
  }

  /*Importante no se puede actualizar el estado simplemente actualizando la variable */


  console.log("Log de app")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={avanzarContador}>
          Click aqui, clicks:{counter}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <OtroBoton text="Hola soy otro boton importado" 
      alClick={() => console.log("al clickazo")} />
      <OtroBoton text="boton 2 del mismo componente"
      alClick={() => console.log("Soy un click que vino del boton2 de un mismo componente pero con diferente comportamiento")}
      />
    </>
  )
}

export default App
