import React from 'react';
import Counter from './counter';
import { shallow } from 'enzyme'

describe('[UNIT] Testing the counter Component', () => {
    let wrapper;

    //beforeEach and beforeAll are Jest helper functions to render the component 
    //before the test is run
    beforeEach(() => {
        //shallow is an enzyme function all to render just this component and no children
        wrapper = shallow(<Counter/>)
    })

    describe('Component Validation', () => {
        it('should display 0 as default value', () => {
            expect(wrapper.find('h1').text()).toContain(0);
        });
        
        it('should increase counter when button is clicked', () => {
            wrapper.find('button').simulate('click');
            expect(wrapper.find('h1').text()).toContain('1');
        });
        
    });
    
});

