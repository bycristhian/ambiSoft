
import React from 'react'
import { Redirect } from 'react-router-dom'

// Components
import FormSesion from '../components/FormSesion'
import GoHome from '../components/GoHome'

// Constants
import { URL_API } from '../constants'
import { getValueLocalStorage } from '../auth/auth'


class FormLogin extends React.Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            username: "",
            password: "",
            wasLogged: false
        }
    }

    render(){

        if (this.state.wasLogged || getValueLocalStorage('auth_token') !== ''){
            return <Redirect to="/game/" />

        } else {
            return(
                <React.Fragment>
                    <GoHome />
                    <FormSesion data={this.state} action="Sign In" messageBack="Don't have an account?" btnName="Sign Up now" link="/signup/" handleChange={this.handleChange} onClick={this.handleClick}/>
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
            body: JSON.stringify({
                'identity': this.state.username,
                'password': this.state.password
            })
        }

        const response = await fetch(`${URL_API}/auth/player`, request)
        const data = await response.json()

        if(response.status === 200){
            this.setTokenLocalStorage(data)
            this.setState({
                wasLogged: true
            })

        }else {
            this.setState({
                'username': "",
                'password': ""
            })
        }
    }

    setTokenLocalStorage(data){
        localStorage.setItem('auth_token', data.payload.auth_token)
        localStorage.setItem('idUser', data.payload.id)
        localStorage.setItem('username', data.payload.username)
        localStorage.setItem('score', data.payload.score)
    }
    
    componentDidMount(){
        document.title = "AmbiSoft | SignIn"
    }
}

export default FormLogin