
import React from 'react'
import { Redirect } from 'react-router-dom'

// Components
import PreGame from '../components/PreGame'
import HeaderGame from '../components/HeaderGame'
import ProgressBar from '../components/ProgressBar'
import ItemAnswer from '../components/ItemAnswer'
import Alert from '../components/Alert'

// Audio
import AudioGame from '../audio/sound_game.mp3'
  

class Game extends React.Component {

    constructor(props){
        super(props)

        this.counter = null
        this.audioGame = new Audio(AudioGame)
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
            return <Redirect to="/signin/" />

        } else if (this.state.statusGame == 'stop'){
            return <PreGame handleClickStartGame={this.handleClickStartGame.bind(this)} />
        }

        //this.audioGame.play()

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
    }

    handleClickAnswer(e){
        const answer = this.state.questions[this.state.numberQuestion].answers[e.target.id]
        if (this.state.wait == false){
            if (answer.is_correct){
                this.setState({
                    'alert': {
                        'show': true,
                        'message': `La respuesta es correcta, felicitaciones, score: +${this.state.time}`,
                        'type': "success"
                    },
                    'score': this.state.score += this.state.time
                })
            }else {
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
            }, 3000)
        }
    }

    handleClickStartGame(){
        this.nextQuestion()
        this.setState({
            'statusGame': 'asking'
        })
    }

    // Pasar a la siguiente pregunta
    nextQuestion(){

        if (this.counter != null){
            clearInterval(this.counter)
        }

        this.setState({
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

    }

    // Disminuir el Progress Bar
    startTime(){
        if(this.state.time != 0){
            this.setState({'time': this.state.time -1})

        }else {
            this.nextQuestion()
        }
    }
}

export default Game