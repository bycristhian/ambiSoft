
import React from 'react'
import { Link } from 'react-router-dom'


const GameFinish = (props) => (
    <div className="prueba">
        <div class="centrado-porcentual">
            Gracias por jugar {props.player} <br/>Puntuación total:  {props.score}
            <br/>
            <div className="row">
                <button type="button" onClick={props.handleClickRestartGame} className="btn btn-outline-primary ml-3 mt-3">Volver a jugar</button>
                <Link to="/" className="btn btn-outline-info ml-2 mt-3">Home</Link>
            </div>
        </div>
    </div>
)

export default GameFinish