
import React from 'react'
import { Redirect } from 'react-router-dom'

// Components
import PreGame from '../components/PreGame'
import HeaderGame from '../components/HeaderGame'
import ProgressBar from '../components/ProgressBar'
import ItemAnswer from '../components/ItemAnswer'
import Alert from '../components/Alert'
import GameFinish from '../components/GameFinish'

// Audio
import AudioGame from '../audio/sound_game.mp3'
import AudioWin from '../audio/sound_win.mp3'
import AudioIncorrect from '../audio/sound_incorrect.mp3'

// Auth
import { getValueLocalStorage } from '../auth/auth'
import { URL_API } from '../constants'


class Game extends React.Component {

    constructor(props){
        super(props)

        this.counter = null
        this.audioGame = new Audio(AudioGame)
        this.audioGame.volume = 0.5

        // Audio answer correct
        this.audioWin = new Audio(AudioWin)

        // Audio answer incorrect
        this.audioIncorrect = new Audio(AudioIncorrect)
    }

    state = {
        'isLoading': true,
        'isAuthenticated': null,
        'statusGame': 'stop',
        'score': 0,
        'wait': false,
        'alert': {
            'show': false,
            'message': "",
            'type': ""
        },
        'time': 100,
        'numberQuestion': -1,
        'questions': []
    }

    render(){

        if (this.state.isLoading){
            return (
                <div className="overflow-hidden row text-center justify-content-center align-items-center vh-100">
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else if (this.state.statusGame === 'asking'){

            this.audioGame.play()
            return (
                <React.Fragment>
                    <HeaderGame numQuestion={this.state.numberQuestion + 1} score={this.state.score}/>
                    <ProgressBar time={this.state.time} />
                    <br/>
                    <div className="col-md-12 bg-white container-question">
                        {this.state.questions[this.state.numberQuestion].description}
                    </div>
                    <br/>
                    <br/>
                    <div className="col-md-12 container-answers row">
                        {this.state.questions[this.state.numberQuestion].answers.map((answer, index) => (
                            <ItemAnswer description={answer.description} handleClickAnswer={this.handleClickAnswer.bind(this)} idAnswer={index} />
                        ))}
                    </div>
                    {(this.state.alert.show) ? <Alert message={this.state.alert.message} type={this.state.alert.type} /> : null }
                </React.Fragment>
            )

        } else if (this.state.isAuthenticated === false && this.state.isAuthenticated !== null){
            return <Redirect to="/signin/" />

        } else if (this.state.statusGame === 'finish') {
            return <GameFinish score={this.state.score} player={getValueLocalStorage('username')} handleClickRestartGame={this.handleClickRestartGame.bind(this)}/>

        } else {
            return <PreGame handleClickStartGame={this.nextQuestion.bind(this)} />
        }
    }

    componentWillUnmount(){
        this.audioGame.pause()
    }

    async componentDidMount(){
        document.title = "AmbiSoft | Game"

        const request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'http_auth_token': getValueLocalStorage('auth_token'),
                'http_csrf_token': '262d3082b3981f86db9217265a06705e'
            }
        }

        let response = await fetch(`${URL_API}/questions/`, request)
        let data = await response.json()

        if (response.status === 200){
            this.setState({
                isLoading: false,
                questions: data.payload,
                isAuthenticated: true
            })
        }else {
            this.setState({
                isLoading: false,
                isAuthenticated: false
            })
        }
    }

    handleClickAnswer(e){
        const answer = this.state.questions[this.state.numberQuestion].answers[e.target.id]
        if (this.state.wait === false){
            if (answer.is_correct){
                this.audioWin.play()
                this.setState({
                    'alert': {
                        'show': true,
                        'message': `La respuesta es correcta, felicitaciones, score: +${this.state.time}`,
                        'type': "success"
                    },
                    'score': this.state.score += this.state.time
                })
            }else {
                this.audioIncorrect.play()
                this.setState({
                    'alert': {
                        'show': true,
                        'message': "La respuesta que seleccionaste no era correcta",
                        'type': "danger"
                    }
                })
            }
            this.setState({'wait': true})
            clearInterval(this.counter)
            setTimeout(() => {
                this.nextQuestion()
            }, 1500)
        }
    }

    // Pasar a la siguiente pregunta
    nextQuestion(){
        if (this.state.questions.length !== this.state.numberQuestion + 1){
            if (this.counter !== null){
                clearInterval(this.counter)
            }
    
            this.setState({
                'statusGame': 'asking',
                'numberQuestion': this.state.numberQuestion += 1,
                'time': 100,
                'alert': {
                    'show': false,
                    'message': "",
                    'type': ""
                },
                'wait': false
            })
    
            setTimeout(() => {
                this.counter = setInterval(this.startTime.bind(this), 160)
            }, 1000)

        }else {
            this.audioGame.pause()
            this.setState({
                'statusGame': 'finish'
            })

            const request = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'http_auth_token': getValueLocalStorage('auth_token'),
                    'http_csrf_token': '262d3082b3981f86db9217265a06705e'
                },
                body: JSON.stringify({
                    username: getValueLocalStorage('username'),
                    score: this.state.score
                })
            }

            this.updateScorePlayer(request)
        }
    }

    async updateScorePlayer(request){
        await fetch(`${URL_API}/players/${getValueLocalStorage('idUser')}/`, request)
    }

    // Disminuir el Progress Bar
    startTime(){
        if(this.state.time !== 0){
            this.setState({'time': this.state.time -1})

        }else {
            this.nextQuestion()
        }
    }

    handleClickRestartGame(){
        this.setState({
            'statusGame': 'stop',
            'score': 0,
            'time': 100,
            'numberQuestion': -1
        })
    }
}

export default Game