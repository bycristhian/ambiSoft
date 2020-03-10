
import React from 'react'

// Components
import Header from '../components/Header'
import ModalQuestionCreation from '../components/ModalQuestionCreation'
import ListQuestion from '../components/ListQuestion'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class PanelAdmin extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Header />
                <ModalQuestionCreation />
                <ListQuestion />
                <br/>
                <div className="m-4 text-center">
                    <button className="btn btn-success fs-20" data-toggle="modal" data-target="#modalRegisterForm">
                        <FontAwesomeIcon icon={faPlus}/> Crear pregunta
                    </button>
                </div>
                
            </React.Fragment>
        )
    }

}

export default PanelAdmin