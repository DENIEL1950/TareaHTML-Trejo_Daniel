//DESEÑE EL COMPONENTE QUE MUESTRE SU NOMBRE, EDAD Y APASTIEMPO
//A CONTINUACIÓN, MUESTRELO 2 VECES EN SU APP
//Pase el apellido de la persona
import React from 'react'

export default function Ejercicios(props) {
  return (
    <div>
        <p>Mi nombre es {props.nombre}</p>
        <p>Mi edad es {props.edad} años</p>
        <p>Mi pasatiempo es <strong>{props.pasatiempo}</strong></p>
    </div>
  )
}