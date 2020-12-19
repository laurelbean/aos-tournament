import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import App from '../src/app';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('App displays h1 with AoS Tournament Helper', () => {
    const appObj = shallow(<App/>);
    const label = appObj.find('h1');
    expect(label.text()).toEqual('AoS Tournament Helper');
});

test('Display Players section', () => {
    const appObj = shallow(<App/>);
    const label = appObj.find('h2');
    expect(label.text()).toEqual('Players');
});

test('Display Add Player textbox', () => {
    const appObj = shallow(<App/>);
    const input = appObj.find('#playerInput');
    expect(input.type()).toEqual('input');
    //expect(input.getAttribute('').toEqual(''));
});

test('Display Add Player button', () => {
    const appObj = shallow(<App/>);
    const button = appObj.find('#playerButton');
    expect(button.text()).toEqual('Add Player');
});

test('Display Player List', () => {
    const appObj = shallow(<App/>);
    const playerlist = appObj.find('.playerlist');
    expect(playerlist.type()).toEqual('ul');
});

test('Add one player', () => {
    const appObj = shallow(<App/>);
    appObj.instance().setState({addedName: 'Laurel'});
    appObj.instance().addNewPlayer();
    const players = appObj.find('li');
    expect(players.length).toEqual(1);
})

test('Add two players', () => {
    const appObj = shallow(<App/>);
    appObj.instance().setState({addedName: 'Laurel'});
    appObj.instance().addNewPlayer();
    appObj.instance().setState({addedName: 'Daniel'});
    appObj.instance().addNewPlayer();
    const players = appObj.find('li');
    expect(players.length).toEqual(2);
})

test('Display Create Tournament button', () => {
    const appObj = shallow(<App/>);
    const button = appObj.find('#tournamentButton');
    expect(button.text()).toEqual('Create Tournament');
})

test('Display Tournament List', () => {
    const appObj = shallow(<App/>);
    const list = appObj.find('#tournamentList');
    expect(list.type()).toEqual('ol');
});

test('Creating a tournament with 1 player', () => {
    const appObj = shallow(<App/>);
    appObj.instance().setState({addedName: 'Laurel'});
    appObj.instance().addNewPlayer();
    appObj.instance().createTournament();
    //const list = appObj.find('#tournamentList');
    const list = appObj.find('ol li');
    expect(list.length).toEqual(1);
    expect(list.text()).toEqual('Laurel vs The Ringer');
});

test('Creating a tournament with 2 players', () => {
    const appObj = shallow(<App/>);
    appObj.instance().setState({addedName: 'Laurel'});
    appObj.instance().addNewPlayer();
    appObj.instance().setState({addedName: 'Daniel'});
    appObj.instance().addNewPlayer();
    appObj.instance().createTournament();
    //const list = appObj.find('#tournamentList');
    const list = appObj.find('ol li');
    expect(list.length).toEqual(1);
    expect(list.text()).toEqual('Laurel vs Daniel');
});

test('Creating a tournament with 3 players', () => {
    const appObj = shallow(<App/>);
    appObj.instance().setState({addedName: 'Laurel'});
    appObj.instance().addNewPlayer();
    appObj.instance().setState({addedName: 'Daniel'});
    appObj.instance().addNewPlayer();
    appObj.instance().setState({addedName: 'Zeke'});
    appObj.instance().addNewPlayer();
    appObj.instance().createTournament();
    const list = appObj.find('ol li');
    expect(list.length).toEqual(2);
    const last = list.at(1);
    expect(last.text()).toEqual('Zeke vs The Ringer');
});