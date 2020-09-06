import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../components/LoginPage'

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call initLogin', () => {
    const initLogin = jest.fn()
    const wrapper = shallow(<LoginPage initLogin={initLogin} />);
    wrapper.find('button').simulate('click');
    expect(initLogin).toHaveBeenCalled();
  })