import React from 'react'

import "./cardv1.css"

const Card1 = (props) => (
    <div>
        <div className="card-box">
            <div className="image-mask">
                <img src={props.image} alt="" />
            </div>
            <div className="text-section">
                <h2>{props.nombre} Club</h2>
                <p>{props.texto}</p>
            </div>
            <div className="button">
                <a href="https://www.rotary.org" target='_blank' rel="noreferrer" className="button">More Info+</a>
            </div>
        </div>
    </div>
);

export default Card1