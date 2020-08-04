import React from 'react'
import { Link } from 'react-router-dom'
import eco from '../img/eco.png'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Auth
import { getValueLocalStorage } from '../auth/auth'

// Constants
import { URL_API } from '../constants'


class Header extends React.Component {

    render(){

        const host = 'http://localhost:3000'

        return(
            <nav className="navbar navbar-expand-lg bg_header box_sombra">
                <img src={eco} className="mr-3" height="50" width="50"></img>
                <a className="navbar-brand text" href="#">Ambiental</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link text" to="/">Inicio</Link>
                        <Link className="nav-item nav-link text" to="/game/">Jugar</Link>
                        {(`${URL_API}/game/` !== window.location.href) ? <Link className="nav-item nav-link text" to="/ranking/">Ranking</Link> : null}
                        {(getValueLocalStorage('auth_token') !== '') ? <Link to="/signin/" onClick={this.closeSession.bind(this)} className="nav-item nav-link text">Logout</Link> : null}
                    </div>
                    <div className="container-social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#56A430" className="icon" />
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="#56A430" className="icon" />
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#56A430" className="icon" />
                    </div>
                </div>
            </nav>
        )
    }

    closeSession(){
        localStorage.setItem('auth_token', '')
        localStorage.setItem('username', '')
        localStorage.setItem('idUser', '')
        localStorage.setItem('score', '')
    }
}

export default Header