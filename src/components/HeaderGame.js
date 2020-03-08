
import React from 'react'

// Images
import Trophy from '../img/trophy.png'
import User from '../img/user.png'


const HeaderGame = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-12">
        <div className="col-md-4">
            <img src={User} height="40" className="mr-3" />
            <a className="navbar-brand" href="#">Cristhian</a>
        </div>
        <div className="col-md-4">
            <p className="title-header-game">QUESTION {props.numQuestion}</p>
        </div>
        <div className="collapse navbar-collapse col-md-4" id="navbarSupportedContent">
            <p className="score-header">{props.score}</p>
            <img src={Trophy} height="50" className="logo-trophy"/>
        </div>
    </nav>
)

export default HeaderGame