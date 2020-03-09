
import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const GoHome = () => (
    <Link className="comeBack" to="/">
        <FontAwesomeIcon icon={faHome} color="#4CAF50" size="2x" />
    </Link>
)

export default GoHome