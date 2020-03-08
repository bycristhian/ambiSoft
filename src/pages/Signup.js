
import React from 'react'

// Components
import FormSesion from '../components/FormSesion'


class FormRegister extends React.Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            'username': "",
            'password': ""
        }
    }

    render(){
        return(
            <FormSesion action="Sign Up" messageBack="You have an account?" btnName="Sign In now" link="/signin/" handleChange={this.handleChange} onClick={this.handleClick} />
        )
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(){
        if (this.state.username != "" && this.state.password != ""){
            console.log(`Enviar a Backend:`)
            console.log(this.state)
        }
    }
}

export default FormRegister