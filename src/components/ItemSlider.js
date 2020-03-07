
import React from 'react'


const ItemSlider = (props) => (
    <div className={props.typeDiv}>
        <img src={props.image} className="d-block w-100" height="700" alt="..." />
        <div className="carousel-caption d-none d-md-block slider-content">
            <h5>{props.title}</h5>
            <p>{props.subtitle}</p>
        </div>
    </div>
)

export default ItemSlider

