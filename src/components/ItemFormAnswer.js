
import React from 'react'


const ItemFormAnswer = (props) => {
    var name = (`${props.input}`.split('_'))
    const input = name[0].toUpperCase() + ` ${name.slice(1)}`

    name = (name.length == 2) ? name[0] + name[1] : name

    return(
        <div className="md-form mb-5">
            <label data-error="wrong" data-success="right">{input}</label>
            <input type="text" className="form-control validate" name={name}/>
        </div>
    )
}

export default ItemFormAnswer