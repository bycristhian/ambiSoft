import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/home.css'
import '../css/general.css'

// Pages
import Home from '../pages/Home'
import Game from '../pages/Game'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/game/" component={Game}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
