
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => (

    <footer class="page-footer font-small blue" style={{position: `${props.styles}`}}>

        <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <Link to="/"> AmbiSoft</Link>
        </div>

    </footer>
)

export default Footer