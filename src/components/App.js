import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/home.css'
import '../css/game.css'
import '../css/main.css'
import '../css/util.css'
import '../css/general.css'

// Pages
import Home from '../pages/Home'
import Game from '../pages/Game'
import FormLogin from '../pages/Login'
import FormRegister from '../pages/Signup'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/game/" component={Game}/>
                <Route exact path="/signin/" component={FormLogin}/>
                <Route exact path="/signup/" component={FormRegister}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
