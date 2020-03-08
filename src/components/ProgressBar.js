
import React from 'react'


const ProgressBar = (props) => (
    <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: `${props.time}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
)

export default ProgressBar