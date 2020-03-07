
import React from 'react'

// Components
import FormSesion from '../components/FormSesion'


class FormRegister extends React.Component {

    render(){
        return(
            <FormSesion action="Sign Up" messageBack="You have an account?" btnName="Sign In now" link="/signin/" />
        )
    }
}

export default FormRegister