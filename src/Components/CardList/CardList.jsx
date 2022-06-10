import React from 'react'
import { Cardv1 } from '../index'
import './cardlist.css'
import{ img1, img2, img3 } from '../assets'

function CardList() {
  return (
    <div className="container-carrousel">
        <ul className='horizontal-list'>
            <Cardv1 image={img1} nombre='Callate' texto="El club de los perros es mas para gente que le gusta lamer el piso y comer sobras de los demas Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique? Illum consectetur architecto quo accusamus commodi consequuntur atque animi aut?.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique? Illum consectetur architecto "/>
            <Cardv1 image={img2} nombre='Gato' texto="El club de los Gatos liderado por el Gato mas gatuno lo conforma mas de 1000 gatitos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique? Illum consectetur architecto quo accusamus commodi consequuntur atque animi aut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique? Illum consectetur architecto quo  "/>
            <Cardv1 image={img3} nombre='Micho' texto="El club de Micho es el mas michifus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique? Illum consectetur architecto quo accusamus commodi consequuntur atque animi aut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, similique? Illum consectetur architecto quo accusamus commodi consequuntur atque animi aut?"/>
        </ul>
    </div>
  )
}

export default CardList