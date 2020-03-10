
import React from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

// Components
import ItemFormAnswer from '../components/ItemFormAnswer'


class ModalQuestionCreation extends React.Component {

    render(){

        var items = []
        for (let i = 0; i < 4; i++) {
            items.push(
                <ItemFormAnswer input={`answer_${i + 1}`}/>
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
                                <ItemFormAnswer input="question"/>
                                {items}
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
}

export default ModalQuestionCreation