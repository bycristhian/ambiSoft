import React from 'react'
import eco from '../img/eco.png'
import twitter from '../img/twitter.png'

class Header extends React.Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg bg_header box_sombra">
                <img src={eco} className="mr-3" height="50" width="50"></img>
                <a className="navbar-brand text" href="#">Ambiental</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active text" href="#">Inicio</a>
                        <a className="nav-item nav-link text" href="#">Juego</a>
                    </div>
                    <div>
                        <img src={twitter}></img>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header