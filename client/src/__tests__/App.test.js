import {App} from '../App';
import {shallow} from 'enzyme'; 
import React from 'react'; 
import toJson from 'enzyme-to-json'; 

describe('App', () => {
    it('renders without crashing given the required props', () => {
        const props = {}
        const wrapper = shallow(<App {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
