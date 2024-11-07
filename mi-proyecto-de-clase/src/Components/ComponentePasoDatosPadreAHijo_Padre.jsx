import React, { useState } from 'react'
import ComponentePasoDatosPadreAHijo_Hijo from './ComponentePasoDatosPadreAHijo_Hijo';

export default function () {

  const [datos, estableceDatos] = useState('');

  const padreAhijo = () => {
    const datosAenviarALhijo = {
        nombre: 'Pepe',
        apellidos: 'apellido1 apellido2',
        vidas: 3
    }
    estableceDatos(datosAenviarALhijo);
  }

  return (
    <div className='App'>
        <h3>ComponentePasoDatosPadreAHijo_Padre</h3>
        <ComponentePasoDatosPadreAHijo_Hijo padreAhijo={datos}/>

        <div>
            <button onClick={() => padreAhijo()}>Enviar mensaje a hijo</button>
        </div>

    </div>
  )
}
