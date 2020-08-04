
import React from 'react'
import { Redirect } from 'react-router-dom'

// Components
import FormSesion from '../components/FormSesion'
import GoHome from '../components/GoHome'

// Constants
import { URL_API } from '../constants'
import { getValueLocalStorage } from '../auth/auth'


class FormRegister extends React.Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            username: "",
            password: "",
            wasCreated: false
        }
    }

    render(){

        if (this.state.wasCreated || getValueLocalStorage('auth_token') !== ''){
            return <Redirect to="/signin/" />

        } else {
            return(
                <React.Fragment>
                    <GoHome />
                    <FormSesion data={this.state} action="Sign Up" messageBack="You have an account?" btnName="Sign In now" link="/signin/" handleChange={this.handleChange} onClick={this.handleClick} />
                </React.Fragment>
            )
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(){
        if (this.state.username !== "" && this.state.password !== ""){
            this.fetchData()
        }
    }

    async fetchData(){

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'http_csrf_token': '262d3082b3981f86db9217265a06705e'
            },
            body: JSON.stringify(this.state)
        }

        const response = await fetch(`${URL_API}/players/`, request)

        if(response.status === 201){
            this.setState({
                wasCreated: true
            })

        }else {
            this.setState({
                'username': "",
                'password': ""
            })
        }
    }
    
    componentDidMount(){
        document.title = "AmbiSoft | SignUp"
    }
}

export default FormRegister