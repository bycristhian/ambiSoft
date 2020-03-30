
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
                'description': '¿Cuál es el porcentaje de plástico de un solo uso en Colombia?',
                'answers': [
                    {
                        'description': 'El 96% del plástico es de un solo uso',
                        'is_correct': false
                    },
                    {
                        'description': 'El 56% del plástico es de un solo uso',
                        'is_correct': true
                    },
                    {
                        'description': 'El 50% del plástico es de un solo uso',
                        'is_correct': false
                    },
                    {
                        'description': 'El 20% del plástico es de un solo uso',
                        'is_correct': false
                    }
                ]
            },
            {
                'description': '¿Cuál empresa está haciendo calzado con productos reciclados?',
                'answers': [
                    {
                        'description': 'Ecoflow empresa de calzado elaborados por tubos de PVC, botas pantaneros, etc.',
                        'is_correct': true
                    },
                    {
                        'description': 'Adidas empresa de calzado elaborados por cartón',
                        'is_correct': false
                    },
                    {
                        'description': 'Puma empresa de calzado elaborados por plástico',
                        'is_correct': false
                    },
                    {
                        'description': 'Reebook empresa de calzado elaborados por tubos de pvc',
                        'is_correct': false
                    }
                ]
            },
            {
                'description': '¿Qué es las 3 R en el medio ambiente?',
                'answers': [
                    {
                        'description': 'Reutilizar, Reciclar y Reducir',
                        'is_correct': true
                    },
                    {
                        'description': 'Rotar, Reunir y Recoger',
                        'is_correct': false
                    },
                    {
                        'description': 'Recoger, Reutilizar y Robar',
                        'is_correct': false
                    },
                    {
                        'description': 'Reciclar, Rotar y Reutilizar',
                        'is_correct': false
                    }
                ]
            },
            {
                'description': 'Que norma técnica colombiana establece que para cada tipo de residuo se debe utilizar un contenedor de un color específico',
                'answers': [
                    {
                        'description': 'La norma WHT35',
                        'is_correct': false
                    },
                    {
                        'description': 'La norma GTC24',
                        'is_correct': true
                    },
                    {
                        'description': 'La norma XYZ525',
                        'is_correct': false
                    },
                    {
                        'description': 'La norma ERT89',
                        'is_correct': false
                    }
                ]
            },
            {
                'description': 'El fenómeno que ocasiona el calentamiento del planeta cambios climáticos y múltiples enfermedades respiratorios se le llama:',
                'answers': [
                    {
                        'description': 'Tsunami',
                        'is_correct': false
                    },
                    {
                        'description': 'Terremoto',
                        'is_correct': false
                    },
                    {
                        'description': 'Invierno',
                        'is_correct': false
                    },
                    {
                        'description': 'Efecto invernadero',
                        'is_correct': true
                    }
                ]
            }
        ]
    }

    render(){

        if (this.state.isAuthenticated){
            return <PreGame handleClickStartGame={this.nextQuestion.bind(this)} />

        } else if (this.state.statusGame == 'asking'){

            this.audioGame.play()
            console.log("Hi")
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
                'isAuthenticated': false,
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
            console.log(this.state.statusGame)
    
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