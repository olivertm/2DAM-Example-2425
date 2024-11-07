import { useState, createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimerComponente from './Components/PrimerComponente'
import SegundoComponente from './Components/SegundoComponente'
import ComponentePadre from './Components/ComponentePasoDatosPadreAHijo_Padre'
import ComponentePasoDatosPadreAHijo_Padre from './Components/ComponentePasoDatosPadreAHijo_Padre'
import ComponentePasoDatosHijoAPadre_Padre from './Components/ComponentePasoDatosHijoAPadre_Padre'
import ComponentePasoDatosHijoAPadre_Hijo from './Components/ComponentePasoDatosHijoAPadre_Hijo'
import ComponentePasoDatosHermano1 from './Components/ComponentePasoDatosHermano1'
import ComponentePasoDatosHermano2 from './Components/ComponentePasoDatosHermano2'

// Creamos el contexto para compartir datos entre hermanos
export const MensajeContexto = createContext();


function App() {
  const [count, setCount] = useState(0)

  const [mensaje, setMensaje] = useState('Mensaje inicial');

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
      <h1>Oliver</h1>
      
      <hr></hr>
      <h1>Paso de parametros entre Padre a Hijo</h1>
      <ComponentePasoDatosPadreAHijo_Padre/>
      <hr></hr>
      <h1>Paso de parametros entre Hijo a Padre</h1>
      <ComponentePasoDatosHijoAPadre_Padre/>
      <hr></hr>

      <MensajeContexto.Provider value={{mensaje, setMensaje}}>
        <h1>Comunicación entre Componentes hermanos</h1>
        <ComponentePasoDatosHermano1 />
        <ComponentePasoDatosHermano2 />

      </MensajeContexto.Provider>
      
    </>
  )
}

export default App
