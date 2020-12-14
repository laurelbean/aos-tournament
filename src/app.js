import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedName: '',
            players: ['Laurel', 'Daniel'],
        }
        this.addNewPlayer = this.addNewPlayer.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        //this.createTournament = this.createTournament.bind(this);
    }

    addNewPlayer() {
        //console.log(name);
        //const oldPlayers = this.state.players;
        /*this.setState({
            players: [oldPlayers, 'Daniel']
        })*/
        this.setState(state => {
            const players = [...state.players, state.addedName];
       
            return {
                addedName: '',
                players
            };
        });
    }

    createTournament = () => {
        console.log('Needs implementing');
    }

    handleOnChange(event) {
        this.setState({ addedName: event.target.value})
    }

    render() {
        return (
            <Fragment>
                <h1>Players</h1>
                <input type="text" value={this.state.addedName} onChange={this.handleOnChange} />
                <button onClick={this.addNewPlayer}>Add Player</button>
                <ul>
                    {this.state.players.map(player => (
                        <li key={player}>{player}</li>
                    ))}
                </ul>
                <button>Create Tournament</button>
            </Fragment>
        );
    }
}

export default hot(module)(App);