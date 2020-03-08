
import React from 'react'


const Alert = (props) => {
    const styles = `alert alert-${props.type} alert-message animated bounceInRight`

    return(
        <div className={styles} role="alert">
            {props.message}
        </div>
    )
}

export default Alert