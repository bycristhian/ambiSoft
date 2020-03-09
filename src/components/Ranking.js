
import React from 'react'


class Ranking extends React.Component {

    state = {
        'players': [
            {
                'username': 'Camilo',
                'score': 1245
            },
            {
                'username': 'Victor',
                'score': 100
            },
            {
                'username': 'David',
                'score': 5000
            },
            {
                'username': 'Cristhian',
                'score': 500
            },
            {
                'username': 'Kelly',
                'score': 10000
            },
            {
                'username': 'Camilo',
                'score': 1245
            },
            {
                'username': 'Victor',
                'score': 100
            },
            {
                'username': 'David',
                'score': 5000
            },
            {
                'username': 'Cristhian',
                'score': 500
            },
            {
                'username': 'Kelly',
                'score': 10000
            }
        ]
    }

    render(){
        return(
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.players.map((player, index )=> (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{player.username}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Ranking