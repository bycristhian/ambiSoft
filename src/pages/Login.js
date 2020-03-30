
import React from 'react'
import { Redirect } from 'react-router-dom'

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
                <FormSesion data={this.state} action="Sign In" messageBack="Don't have an account?" btnName="Sign Up now" link="/signup/" handleChange={this.handleChange} onClick={this.handleClick}/>
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
            this.fetchData()
        }
    }

    async fetchData(){
        const url = 'http://localhost:8000/api/users/login/'

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        const response = await fetch(url, request)
        const data = await response.json()

        if(response.status == 201){
            this.setTokenLocalStorage(data)

        }else {
            this.setState({
                'username': "",
                'password': ""
            })
        }
    }

    setTokenLocalStorage(data){
        localStorage.setItem('token', data.token)
        return <Redirect to="/game/" />
    }
    
    componentDidMount(){
        document.title = "AmbiSoft | SignIn"
    }
}

export default FormLogin