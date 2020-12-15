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

test('Display Create Tournament button', () => {
    const appObj = shallow(<App/>);
    const button = appObj.find('#tournamentButton');
    expect(button.text()).toEqual('Create Tournament');
})