import React from 'react'
import Header from './Header'
import Slider from './Slider'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../css/home.css'
import '../css/general.css'


function App() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Slider />
            </div>
        </div>
    )
}

export default App;
