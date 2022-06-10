import React from 'react'
import { Cardv1 } from '../index'
import './cardlist.css'
import{ img1, img2, img3, info } from '../assets'

function CardList() {
  return (
    <div className="container-carrousel">
        <ul className='horizontal-list'>
            <Cardv1 image={img1} nombre={info.interact.nombre} texto={info.interact.texto}/>
            <Cardv1 image={img2} nombre={info.rotaract.nombre} texto={info.rotaract.texto}/>
            <Cardv1 image={img3} nombre={info.rotary.nombre} texto={info.rotary.texto}/>
        </ul>
    </div>
  )
}

export default CardList