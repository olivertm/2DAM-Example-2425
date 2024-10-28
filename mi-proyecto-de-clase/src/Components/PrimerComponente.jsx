import React, {useState} from 'react'
import './PrimerComponente.css'


export default function PrimerComponente() {

  // let nombre = "Oliver"
  let email = "oliver@oliver.com"

  const [nombre, setNombre] = useState()

  const [updated, setUpdated] = useState()

 function nombreOnChange(event) {
    return setNombre(event.target.value)
}

function buttonOnClick(){
    setUpdated(nombre)
}

  return (
    <div>
        <h1>Este es mi primer componente</h1>
        <p>Mi nombre en tiempo real es: <strong className={nombre.length < 6 ? 'verde' : 'rojo'} > {nombre}</strong> </p>
        <p>El nombre aplicado es: <strong>{updated}</strong></p>
        <p>Mi correo es: <strong>{email}</strong></p>

        <input type="text" value={nombre} onChange={nombreOnChange}></input>
        <button onClick={buttonOnClick}>Actualizar nombre</button>
    </div>
  )
}
