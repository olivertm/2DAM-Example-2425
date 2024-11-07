import React from 'react'

export default function ComponentePasoDatosPadreAHijo_Hijo({padreAhijo}) {
  return (
    <div>
        <h3>ComponentePasoDatosPadreAHijo_Hijo</h3>
        <div>
            <p>Nombre: {padreAhijo.nombre}</p>
            <p>Apellidos: {padreAhijo.apellidos}</p>
            <p>Vidas: {padreAhijo.vidas}</p>
        </div>

    </div>
  )
}
