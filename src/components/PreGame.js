
import React from 'react'

// Components
import Ranking from '../components/Ranking'
import GoHome from '../components/GoHome'
import Header from './Header'


const PreGame = (props) => (
    <React.Fragment>
        <GoHome />
        <Header />
        <div className="col-md-12 row">
            <div className="col-md-7 rules">
                <h2>Instrucciones del juego</h2>
                <p><b>1.</b> Debe asegurarse de haber iniciado sesión con su username y password</p>
                <p><b>2.</b> Debe hacer click en el botón de la parte inferior (Start)</p>
                <p><b>3.</b> Debe leer cada pregunta y seleccionar la pregunta que crea correcta</p>
                <p><b>4.</b> Al final del juego le mostraremos su puntaje obtenido</p>
                <p><b>5.</b> Debes responder <i>todas</i> las preguntas para guardar el puntaje</p>
                <button type="button" className="btn btn-success btn-block" onClick={props.handleClickStartGame}>Start</button>
            </div>
            <div className="col-md-5 game-ranking bg-white m-4">
                <h2>Ranking</h2>
                <Ranking />
            </div>
        </div>
    </React.Fragment> 
)

export default PreGame