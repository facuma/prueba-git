import React from 'react'
import { Cardv1 } from '../index'
import './cardlist.css'

function CardList() {
  return (
    <div className="container-carrousel">
        <ul className='horizontal-list'>
            <Cardv1 nombre='Interact' texto="Los clubes Interact ofrecen a jóvenes de 12 a 18 años la oportunidad de adquirir habilidades de liderazgo y descubrir la fuerza de Dar de Sí antes de Pensar en Sí. Entérate cómo puedes ser un líder y divertirte a la vez."/>
            <Cardv1 nombre='Rotaract' texto="Los clubes Rotaract ofrecen a personas de 18 años de edad en adelante la oportunidad de intercambiar ideas con los líderes de la comunidad, adquirir habilidades profesionales y de liderazgo y, sobre todo, de servir y divertirse a la vez. "/>
            <Cardv1 nombre='Rotary' texto="Rotary es una red mundial compuesta de 1.400.000 vecinos, amigos, líderes y personas dedicadas a solucionar problemas, quienes ven un planeta en que las personas se unen y toman acción para generar un cambio perdurable en el mundo, sus comunidades y en sí mismos."/>
        </ul>
    </div>
  )
}

export default CardList