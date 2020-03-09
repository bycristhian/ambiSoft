
import React from 'react'

// Components
import FormSesion from '../components/FormSesion'
import GoHome from '../components/GoHome'


class FormLogin extends React.Component {

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
            <React.Fragment>
                <GoHome />
                <FormSesion action="Sign In" messageBack="Don't have an account?" btnName="Sign Up now" link="/signup/" handleChange={this.handleChange} onClick={this.handleClick}/>
            </React.Fragment>
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

export default FormLogin