
import React from 'react'
import { Redirect } from 'react-router-dom'

// Components


class Game extends React.Component {

    state = {
        'is_authenticated': false
    }

    render(){
        return(
            <React.Fragment>
                {this.isAuthenticated()}
            </React.Fragment>
        )
    }

    isAuthenticated(){
        return (!this.state.is_authenticated) ? <Redirect to="/signin/" /> : null 
    }
}

export default Game