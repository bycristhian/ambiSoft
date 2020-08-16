
import React from 'react'

// Constants
import { URL_API } from '../constants'

class Ranking extends React.Component {

    state = {
        'isLoading': true,
        'players': []
    }

    render(){
        if (this.state.isLoading){
            return(
                <div className="text-center p-4">
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else {
            return(
                <table className="table table-striped">
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

    async componentDidMount(){

        const request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'http_csrf_token': '262d3082b3981f86db9217265a06705e'
            }
        }

        let response = await fetch(`${URL_API}/players/top/5/`, request)
        let data = await response.json()

        if (response.status === 200){
            this.setState({
                isLoading: false,
                players: data.payload
            })
        }
    }
}

export default Ranking