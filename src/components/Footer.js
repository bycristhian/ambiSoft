
import React from 'react'

const Footer = (props) => (

    <footer className="page-footer font-small blue" style={{position: `${props.styles}`}}>

        <div className="footer-copyright text-center py-3">
            © 2020 Copyright:<a href="https://github.com/bycristhian"> <b>@bycristhian</b></a>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>

    </footer>
)

export default Footer