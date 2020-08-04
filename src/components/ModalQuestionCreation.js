
import React from 'react'

// Components
import ItemFormAnswer from '../components/ItemFormAnswer'


class ModalQuestionCreation extends React.Component {

    state = {
        'description': "",
        'answers': {
            'answer1': {
                'description': "",
                'is_correct': false
            },
            'answer2': {
                'description': "",
                'is_correct': false
            },
            'answer3': {
                'description': "",
                'is_correct': false
            },
            'answer4': {
                'description': "",
                'is_correct': false
            },
        },
        'answerCorrect': 1
    }

    render(){

        var items = []
        for (let i = 0; i < 4; i++) {
            items.push(
                <ItemFormAnswer input={`answer_${i + 1}`} handleChangeInputAnswer={this.handleChangeInputAnswer.bind(this)}/>
            )
        }

        return(
            <React.Fragment>
                <div className="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog"      aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Crear pregunta</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <ItemFormAnswer input="description" handleChangeInputAnswer={this.handleChangeInputAnswer.bind(this)} />
                                {items}
                            </div>
                            <div className="form-group ml-4 mr-4">
                                <label for="inputState">Respuesta correcta</label>
                                <select id="inputState" className="form-control" onChange={this.prueba}>
                                    <option value="1">Answer 1</option>
                                    <option value="2">Answer 2</option>
                                    <option value="3">Answer 3</option>
                                    <option value="4">Answer 4</option>
                                </select>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button className="btn btn-dark btn-block">Crear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    handleChangeInputAnswer(e){
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    prueba(e){
        console.log(`Pregunta correcta: ${e.target.value}`)
    }
}

export default ModalQuestionCreation