import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimerComponente from './Components/PrimerComponente'
import SegundoComponente from './Components/SegundoComponente'

function App() {
  const [count, setCount] = useState(0)

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
      <PrimerComponente></PrimerComponente>
      <hr></hr>
      <SegundoComponente></SegundoComponente>
    </>
  )
}

export default App
