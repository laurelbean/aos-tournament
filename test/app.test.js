import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import App from '../src/app';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
test('App displays h1 with Hello World', () => {
    const appObj = shallow(<App/>);
    const label = appObj.find('h1');
    expect(label.text()).toEqual('Hello, World!');
});