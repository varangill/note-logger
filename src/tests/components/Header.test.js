import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header initLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call initLogout', () => {
  const initLogout = jest.fn()
  const wrapper = shallow(<Header initLogout={initLogout} />);
  wrapper.find('button').simulate('click');
  expect(initLogout).toHaveBeenCalled();
})