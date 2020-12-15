import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedName: '',
            players: [],
            tournament: []
        }
    }

    addNewPlayer = () => {
        if (this.state.addedName) {
            this.setState(state => {
                const players = [...state.players, state.addedName];
           
                return {
                    addedName: '',
                    players
                };
            });
        }
        
    }

    createTournament = () => {
        let playerList = this.state.players;
        if (playerList.length % 2 === 1) {
            playerList = [...playerList, 'The Ringer'];
        }

        let tournament = playerList.reduce((accumulator, currentValue, index) => {
            if (index % 2 === 1) {
                accumulator = [...accumulator, {player1: playerList[index-1], player2: playerList[index]}];
            }
            return accumulator;
        }, []);
        
        this.setState(state => {
            return {
                ...state,
                tournament: tournament
            }
        });
    }

    handleOnChange = (event) => {
        let test = ``;
        this.setState({ addedName: event.target.value})
    }

    render() {
        return (
            <Fragment>
                <h1>AoS Tournament Helper</h1>
                <h2>Players</h2>
                <input id="playerInput" type="text" value={this.state.addedName} onChange={this.handleOnChange} />
                <button id="playerButton" onClick={this.addNewPlayer}>Add Player</button>
                <ul>
                    {this.state.players.map(player => (
                        <li key={player}>{player}</li>
                    ))}
                </ul>
                <button id="tournamentButton" onClick={this.createTournament}>Create Tournament</button>
                <ol>
                    {this.state.tournament.map((round, index) => {
                        console.log('round', round);
                        console.log('index', index);
                        console.log('round.player1', round.player1);
                        return <li key={index}>{`${round.player1} vs ${round.player2}`}</li>
                    })}
                </ol>
            </Fragment>
        );
    }
}

export default hot(module)(App);