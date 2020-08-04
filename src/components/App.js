import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/home.css'
import '../css/game.css'
import '../css/main.css'
import '../css/util.css'
import '../css/general.css'
import '../css/ranking.css'
import '../css/admin.css'

// Pages
import Home from '../pages/Home'
import Game from '../pages/Game'
import FormLogin from '../pages/Login'
import FormRegister from '../pages/Signup'
import PageRanking from '../pages/Ranking'
import PanelAdmin from '../pages/PanelAdmin'


function App() {
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/game/" component={Game}/>
                <Route exact path="/signin/" component={FormLogin}/>
                <Route exact path="/signup/" component={FormRegister}/>
                <Route exact path="/ranking/" component={PageRanking} />
                <Route exact path="/admin/" component={PanelAdmin} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
