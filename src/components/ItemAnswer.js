
import React from 'react'


const ItemAnswer = (props) => (
    <div className="col-md-5 bg-white p-3 item-answer w-100" id={props.idAnswer} onClick={props.handleClickAnswer}>
        {props.description}
    </div>
)

export default ItemAnswer