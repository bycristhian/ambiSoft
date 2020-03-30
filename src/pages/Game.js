
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
        'isAuthenticated': true,
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
        'questions': [
            {
                'description': '¿Qué es el reciclaje?',
                'answers': [
                    {
                        'description': 'Es dormir sin parar',
                        'is_correct': false
                    },
                    {
                        'description': 'Es reutilizar, reducir y reciclar elementos',
                        'is_correct': true
                    },
                    {
                        'description': 'Es programar para el backend',
                        'is_correct': false
                    },
                    {
                        'description': 'Es tirar todos los elementos que ya no utilicemos a la basura',
                        'is_correct': false
                    }
                ]
            },
            {
                'description': '¿Qué es la programación?',
                'answers': [
                    {
                        'description': 'Es dormir sin parar',
                        'is_correct': false
                    },
                    {
                        'description': 'Es reutilizar, reducir y reciclar elementos',
                        'is_correct': true
                    },
                    {
                        'description': 'Es programar para el backend',
                        'is_correct': false
                    },
                    {
                        'description': 'Es tirar todos los elementos que ya no utilicemos a la basura',
                        'is_correct': false
                    }
                ]
            },
            {
                'description': '¿Qué es Backend?',
                'answers': [
                    {
                        'description': 'Es dormir sin parar',
                        'is_correct': true
                    },
                    {
                        'description': 'Es reutilizar, reducir y reciclar elementos',
                        'is_correct': false
                    },
                    {
                        'description': 'Es programar para el backend',
                        'is_correct': false
                    },
                    {
                        'description': 'Es tirar todos los elementos que ya no utilicemos a la basura',
                        'is_correct': false
                    }
                ]
            },
            {
                'description': '¿Qué es una base de datos?',
                'answers': [
                    {
                        'description': 'Es dormir sin parar',
                        'is_correct': true
                    },
                    {
                        'description': 'Es reutilizar, reducir y reciclar elementos',
                        'is_correct': false
                    },
                    {
                        'description': 'Es programar para el backend',
                        'is_correct': false
                    },
                    {
                        'description': 'Es tirar todos los elementos que ya no utilicemos a la basura',
                        'is_correct': false
                    }
                ]
            },
            {
                'description': '¿Qué es una API REST?',
                'answers': [
                    {
                        'description': 'Es dormir sin parar',
                        'is_correct': false
                    },
                    {
                        'description': 'Es reutilizar, reducir y reciclar elementos',
                        'is_correct': false
                    },
                    {
                        'description': 'Es programar para el backend',
                        'is_correct': false
                    },
                    {
                        'description': 'Es tirar todos los elementos que ya no utilicemos a la basura',
                        'is_correct': true
                    }
                ]
            }
        ]
    }

    render(){

        if (!this.state.isAuthenticated){
            return <PreGame handleClickStartGame={this.nextQuestion.bind(this)} />

        } else if (this.state.statusGame == 'asking'){

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

        }else {
            return <GameFinish score={this.state.score} player="Cristhian" handleClickRestartGame={this.handleClickRestartGame.bind(this)}/>
        }
    }

    componentWillUnmount(){
        this.audioGame.pause()
    }

    componentDidMount(){
        document.title = "AmbiSoft | Game"
    }

    handleClickAnswer(e){
        const answer = this.state.questions[this.state.numberQuestion].answers[e.target.id]
        if (this.state.wait == false){
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
        if (this.state.questions.length != this.state.numberQuestion + 1){
            if (this.counter != null){
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
        }
    }

    // Disminuir el Progress Bar
    startTime(){
        if(this.state.time != 0){
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
        console.log("Restart game...")
        console.log(this.state)
    }

    async verifyAuthenticated(){
        let token = localStorage.getItem('token')
        var is_valid = false


        if (token){
            const url = 'http://localhost:8000/api/users/verify/'

            const request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'token': token})
            }
    
            const response = await fetch(url, request)
            const data = await response.json()
            
            is_valid = data.is_valid

        }
        return is_valid
    }
}

export default Game