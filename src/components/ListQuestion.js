
import React from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'


class ListQuestion extends React.Component {
    
    state = {
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
        return(
            <div className="m-4"> 
                <table className="table table-striped fs-18 bg-white">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Question</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.questions.map((question, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{question.description}</td>
                                <td className="text-right">
                                    <button className="btn btn-primary m-2"><FontAwesomeIcon icon={faEdit} /></button>
                                    <button className="btn btn-danger m-2"><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListQuestion